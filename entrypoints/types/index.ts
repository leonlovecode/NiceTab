// 标签页事件
export type TabEvents = 'onActivated' | 'onAttached' | 'onCreated' | 'onDetached' | 'onMoved' | 'onRemoved' | 'onReplaced' | 'onUpdated' | 'onHighlighted';

// 管理后台-设置信息
export type SettingsProps = {
  openAdminTabAfterBrowserLaunch?: boolean; // 启动浏览器时是否自动打开管理后台
  autoPinAdminTab?: boolean; // 是否固定管理后台
  allowSendPinnedTab?: boolean; // 是否发送固定标签页
  deleteAfterRestore?: boolean; // 恢复标签页/标签组时是否从列表中删除
  openAdminTabAfterSendTabs?: boolean; // 发送标签页后是否打开管理后台
  closeTabsAfterSendTabs?: boolean; // 发送标签页后是否关闭标签页
};

// 管理后台-tab列表页相关
// 标签信息
export interface TabItem {
  tabId?: string;
  title?: string;
  url?: string;
  favIconUrl?: string;
}
// 标签组信息
export interface GroupItem {
  groupId: string;
  groupName: string;
  createTime: string;
  tabList: TabItem[];
  isLocked?: boolean;
  isStarred?: boolean;
}
// 分类信息
export interface TagItem {
  tagId: string;
  tagName: string;
  groupList: GroupItem[];
  isLocked?: boolean;
  isStarred?: boolean;
}
// 分类、标签组、标签页统计信息
export interface CountInfo {
  tagCount: number;
  groupCount: number;
  tabCount: number;
}

// 主题相关
export interface ThemeProps {
  colorPrimary: string;
}

export default { name: 'Nice-Tab-types' }
