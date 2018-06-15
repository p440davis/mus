To develop this theme you will need to do the following: 
===
1. Set up a WordPress site locally on your computer (windows or mac). Recommend using MAMP as per these instructions https://premium.wpmudev.org/blog/develop-wordpress-locally-mamp/
2. Clone this repository inside your MAMP\htdocs\mus\wp-content\themes folder. Recommend using Source Tree https://www.sourcetreeapp.com/
3. Log into your local WordPress site /wp-admin and go to Appearance > Themes and activate the mus theme. You can then delete the other themes from your wp-content\themes folder.
4. Switch to the develop branch. Click the GitFlow button in Sourcetree and create a new feature branch with the same name as the Trello task you are working on. Read about GitFlow here https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow
5. Restore a backup from the live website on your local worpress site so that you have content to work with while developing.
6. Make your changes and test them locally as you go. Commit and push changes often as you go to keep each commit relatively small.
7. Once you are happy with the changes on your branch, push all of your commits and then go to GitHub and submit a Pull Request.
8. Your pull request will be code-reviewed by another member of the team before it is merged into the develop branch, which will them be deployed to the test site.

_s
===

This theme is based on a starter theme called `_s`, or `underscores`, which includes:

* A just right amount of lean, well-commented, modern, HTML5 templates.
* A helpful 404 template.
* A custom header implementation in `inc/custom-header.php` just add the code snippet found in the comments of `inc/custom-header.php` to your `header.php` template.
* Custom template tags in `inc/template-tags.php` that keep your templates clean and neat and prevent code duplication.
* Some small tweaks in `inc/extras.php` that can improve your theming experience.
* A script at `js/navigation.js` that makes your menu a toggled dropdown on small screens (like your phone), ready for CSS artistry. It's enqueued in `functions.php`.
* 2 sample CSS layouts in `layouts/` for a sidebar on either side of your content.
* Smartly organized starter CSS in `style.css` that will help you to quickly get your design off the ground.
* Licensed under GPLv2 or later. :) Use it to make something cool.

Plugins
===

Install the following wordpress plugins:
* Add Search To Menu
* Affiliate Links Lite
* Content Progress
* Easy Footnotes
* Loginizer
* UpdraftPlus - Backup/Restore
* Very Simple Password for Wordpress
* WP Subtitle
