import { LOG_LEVEL_WARN } from "./logger/constants";
import { VaultExplorerPluginSettings, TExplorerView } from "./types";

export const VAULT_EXPLORER_VIEW = "vault-explorer";

export const HOVER_LINK_SOURCE_ID = "vault-explorer-preview";

export const DEFAULT_SETTINGS: VaultExplorerPluginSettings = {
	properties: {
		url: "url",
		image: "image",
		coverImageFit: "image-fit",
		createdDate: "",
		modifiedDate: "",
		custom1: "",
		custom2: "",
		custom3: "",
	},
	filters: {
		search: {
			isEnabled: true,
			value: "",
		},
		sort: {
			isEnabled: true,
			value: "file-name-asc",
		},
		custom: {
			isEnabled: true,
			selectedGroupId: "",
			groups: [],
		},
	},
	views: {
		dashboard: {
			isEnabled: false,
		},
		grid: {
			isEnabled: true,
			coverImageFit: "cover",
			coverImageSources: [
				{
					type: "image-property",
					isEnabled: true,
				},
				{
					type: "url-property",
					isEnabled: true,
				},
				{
					type: "frontmatter",
					isEnabled: true,
				},
				{
					type: "body",
					isEnabled: true,
				},
			],
			loadSocialMediaImage: true,
		},
		list: {
			isEnabled: true,
			showTags: true,
		},
		table: {
			isEnabled: false,
		},
		feed: {
			isEnabled: true,
			removeH1: true,
			collapseStyle: "no-new-lines",
			lineClampLarge: 5,
			lineClampMedium: 3,
			lineClampSmall: 2,
		},
		recommended: {
			isEnabled: false,
		},
		related: {
			isEnabled: false,
		},
	},
	currentView: TExplorerView.GRID,
	titleWrapping: "normal",
	enableClockUpdates: true,
	enableFileIcons: false,
	loadBodyTags: true,
	shouldCollapseFilters: false,
	pageSize: 25,
	viewOrder: [
		TExplorerView.GRID,
		TExplorerView.LIST,
		TExplorerView.FEED,
		TExplorerView.TABLE,
	],
	configDir: ".vaultexplorer",
	pluginVersion: null,
	logLevel: LOG_LEVEL_WARN,
};
