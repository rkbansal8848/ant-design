import React from 'react';
import { BugOutlined, HistoryOutlined } from '@ant-design/icons';
import { Button, Drawer, Grid, Popover, Timeline, Typography } from 'antd';
import type { TimelineItemProps } from 'antd';
import { createStyles } from 'antd-style';
import semver from 'semver';

import deprecatedVersions from '../../../../BUG_VERSIONS.json';
import useFetch from '../../../hooks/useFetch';
import useLocale from '../../../hooks/useLocale';
import Link from '../Link';

interface MatchDeprecatedResult {
  match?: string;
  reason: string[];
}

interface ChangelogInfo {
  version: string;
  changelog: string;
  refs: string[];
}

function matchDeprecated(v: string): MatchDeprecatedResult {
  const match = Object.keys(deprecatedVersions).find((depreciated) =>
    semver.satisfies(v, depreciated),
  );
  const reason = deprecatedVersions[match as keyof typeof deprecatedVersions] || [];
  return {
    match,
    reason: Array.isArray(reason) ? reason : [reason],
  };
}

const useStyle = createStyles(({ token, css }) => ({
  linkRef: css`
    margin-inline-start: ${token.marginXS}px;
  `,
  bug: css`
    font-size: ${token.fontSize}px;
    color: #aaa;
    margin-inline-start: ${token.marginXS}px;
    display: inline-block;
    vertical-align: inherit;
    cursor: pointer;
    &:hover {
      color: #333;
    }
  `,
  bugReasonTitle: css`
    padding: ${token.paddingXXS}px ${token.paddingXS}px;
  `,
  bugReasonList: css`
    width: 100%;
    max-width: 100%;
    li {
      padding: ${token.paddingXXS}px ${token.paddingXS}px;
      a {
        display: flex;
        align-items: center;
        gap: ${token.marginXXS}px;
      }
    }
  `,
  extraLink: css`
    font-size: ${token.fontSize}px;
  `,
  drawerContent: {
    position: 'relative',
    [`> ${token.antCls}-drawer-body`]: {
      scrollbarWidth: 'thin',
      scrollbarColor: 'unset',
    },
  },
}));

export interface ComponentChangelogProps {
  pathname: string;
}

const locales = {
  cn: {
    full: '查看完整日志',
    changelog: '更新日志',
    loading: '加载中...',
    empty: '暂无更新',
    bugList: 'Bug 版本',
  },
  en: {
    full: 'Full Changelog',
    changelog: 'Changelog',
    loading: 'loading...',
    empty: 'Nothing update',
    bugList: 'Bug Versions',
  },
};

const ParseChangelog: React.FC<{ changelog: string }> = (props) => {
  const { changelog = '' } = props;

  const parsedChangelog = React.useMemo(() => {
    const nodes: React.ReactNode[] = [];

    let isQuota = false;
    let lastStr = '';

    for (let i = 0; i < changelog.length; i += 1) {
      const char = changelog[i];

      if (char !== '`') {
        lastStr += char;
      } else {
        let node: React.ReactNode = lastStr;
        if (isQuota) {
          node = <code>{node}</code>;
        }

        nodes.push(node);
        lastStr = '';
        isQuota = !isQuota;
      }
    }

    nodes.push(lastStr);

    return nodes;
  }, [changelog]);

  return (
    <>
      {/* Changelog */}
      <span>{parsedChangelog}</span>
    </>
  );
};

const RenderChangelogList: React.FC<{ changelogList: ChangelogInfo[]; styles: any }> = ({
  changelogList,
  styles,
}) => {
  const elements = [];
  for (let i = 0; i < changelogList.length; i += 1) {
    const { refs, changelog } = changelogList[i];
    // Check if the next line is an image link and append it to the current line
    if (i + 1 < changelogList.length && changelogList[i + 1].changelog.trim().startsWith('<img')) {
      const imgDom = new DOMParser().parseFromString(changelogList[i + 1].changelog, 'text/html');
      const imgElement = imgDom.querySelector('img');
      elements.push(
        <li key={i}>
          <ParseChangelog changelog={changelog} />
          {refs?.map((ref) => (
            <a className={styles.linkRef} key={ref} href={ref} target="_blank" rel="noreferrer">
              #{ref.match(/^.*\/(\d+)$/)?.[1]}
            </a>
          ))}
          <br />
          <img
            src={imgElement?.getAttribute('src') || ''}
            alt={imgElement?.getAttribute('alt') || ''}
            width={imgElement?.getAttribute('width') || ''}
          />
        </li>,
      );
      i += 1; // Skip the next line
    } else {
      elements.push(
        <li key={i}>
          <ParseChangelog changelog={changelog} />
        </li>,
      );
    }
  }
  return <ul>{elements}</ul>;
};

const useChangelog = (componentPath: string, lang: 'cn' | 'en'): ChangelogInfo[] => {
  const logFileName = `components-changelog-${lang}.json`;

  const data = useFetch({
    key: `component-changelog-${lang}`,
    request: () => import(`../../../preset/${logFileName}`),
  });
  return React.useMemo(() => {
    const component = componentPath.replace(/-/g, '');
    const componentName = Object.keys(data).find(
      (name) => name.toLowerCase() === component.toLowerCase(),
    );
    return data[componentName as keyof typeof data] as ChangelogInfo[];
  }, [data, componentPath]);
};

const ComponentChangelog: React.FC<ComponentChangelogProps> = (props) => {
  const { pathname = '' } = props;
  const [locale, lang] = useLocale(locales);
  const [show, setShow] = React.useState(false);

  const { styles } = useStyle();

  const componentPath = pathname.match(/\/components\/([^/]+)/)?.[1] || '';

  const list = useChangelog(componentPath, lang);

  const timelineItems = React.useMemo<TimelineItemProps[]>(() => {
    const changelogMap: Record<string, ChangelogInfo[]> = {};

    list?.forEach((info) => {
      changelogMap[info.version] = changelogMap[info.version] || [];
      changelogMap[info.version].push(info);
    });

    return Object.keys(changelogMap).map((version) => {
      const changelogList = changelogMap[version];
      const bugVersionInfo = matchDeprecated(version);
      return {
        children: (
          <Typography>
            <Typography.Title level={4}>
              {version}
              {bugVersionInfo.match && (
                <Popover
                  destroyTooltipOnHide
                  placement="right"
                  title={<span className={styles.bugReasonTitle}>{locale.bugList}</span>}
                  content={
                    <ul className={styles.bugReasonList}>
                      {bugVersionInfo.reason.map<React.ReactNode>((reason, index) => (
                        <li key={`reason-${index}`}>
                          <a type="link" target="_blank" rel="noreferrer" href={reason}>
                            <BugOutlined />
                            {reason
                              ?.replace(/#.*$/, '')
                              ?.replace(
                                /^https:\/\/github\.com\/ant-design\/ant-design\/(issues|pull)\//,
                                '#',
                              )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  }
                >
                  <BugOutlined className={styles.bug} />
                </Popover>
              )}
            </Typography.Title>
            <RenderChangelogList changelogList={changelogList} styles={styles} />
          </Typography>
        ),
      };
    });
  }, [list]);

  const screens = Grid.useBreakpoint();
  const width = screens.md ? '48vw' : '90vw';

  if (!list || !list.length) {
    return null;
  }

  return (
    <>
      <Button icon={<HistoryOutlined />} onClick={() => setShow(true)}>
        {locale.changelog}
      </Button>
      <Drawer
        destroyOnClose
        className={styles.drawerContent}
        title={locale.changelog}
        extra={
          <Link className={styles.extraLink} to={`/changelog${lang === 'cn' ? '-cn' : ''}`}>
            {locale.full}
          </Link>
        }
        open={show}
        width={width}
        onClose={() => setShow(false)}
      >
        <Timeline items={timelineItems} />
      </Drawer>
    </>
  );
};

export default ComponentChangelog;
