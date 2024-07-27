# Obsidian Vault Explorer

![](/readme/new-cover.png)

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22vault-explorer%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

Find detailed documentation at [vaultexplorer.com](https://vaultexplorer.com)

Vault Explorer is an [Obsidian](https://obsidian.md) plugin that leverages frontmatter properties to help you explore and organize your vault files.

The goal of Vault Explorer is to solve three main problems:

1. How to easily filter by groups of frontmatter properties and other file data.
2. How to display frontmatter properties in meaningful visual layouts.
3. How to create a social media-like experience using just your personal data.

Vault Explorer is a work in progress. Please check the GitHub repository and documentation website regularly for updates.

## Table of contents

-   [Screenshots](#screenshots)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Premium](#premium)
-   [Network use](#network-use)
-   [Contributing](#contributing)
-   [Support](#support)
-   [License](#license)

## Screenshots

### Grid view

![](/readme/grid-view.png)

### List view

![](/readme/list-view.png)

### List view

![](/readme/feed-view.png)

### Custom filter

<img src="readme/custom-filter.png" width="500">

<img src="readme/custom-filter-options-1.png" width="500">

<img src="readme/custom-filter-options-2.png" width="500">

### Favorites

![](/readme/favorites-filter.png)

### Timestamp filter

![](/readme/timestamp-filter.png)

### Sort filter

![](/readme/sort-filter.png)

### Search filter

![](/readme/search-filter.png)

## Installation

1. In Obsidian, open **Settings**
2. Go to **Community plugins**
3. Click **Browse**
4. Search for **Vault Explorer** by **DecafDev**
5. Click **Install**
6. Finally, click **Enable**

## Usage

Click the compass button on the left-hand sidebar to open the vault explorer view.

## Premium

Premium features are available to users who purchase a [Vault Explorer license](https://vaultexplorer.com/docs/premium/).

## Network use

For general usage of the plugin, Vault Explorer does not make any network requests.

If you purchase a Vault Explorer license, the plugin will communicate with the Vault Explorer API. These requests will only send the license key you enter and a device ID generated by the plugin.

When you access the grid view and have configured an image URL property in the settings, Vault Explorer will request the specified URLs to display cover images on corresponding grid cards.

Vault Explorer does not include any client-side telemetry.

## Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

## License

Vault Explorer is distributed under [MIT License](https://github.com/decaf-dev/obsidian-vault-explorer/blob/master/LICENSE).
