---
permalink: /settings/
title: Kint settings
---

<div id="leftmenu" class="col-sm-4 col-md-3 hidden-xs">
<ul class="nav nav-list side-navigation" data-spy="affix" data-offset-top="{{ site.affix_offset }}">
    <li><a href="#common">Most common settings</a></li>
    <li><a href="#kint">Kint settings</a></li>
    <li><a href="#rich">Rich renderer settings</a></li>
    <li><a href="#text">Text renderer settings</a></li>
    <li><a href="{{ site.baseurl }}/contrib/">Improving Kint &raquo;</a></li>
</ul>
</div>
<div class="col-sm-8 col-md-9" markdown="1">

# Kint settings

These are global Kint settings. For plugin settings please see the [plugins page]({{ site.baseurl }}/plugins/).

<section id="common" markdown="1">

## Most common settings

These are the settings you're most likely going to want to customize Kint behavior

`Kint::$enabled_mode` | Determines what mode Kint will run in. `true` is automatic. `false` is disabled. Any of the keys to `Kint::$renderers` to select a specific mode. You should disable Kint in production, or only enable it per `$_SERVER['REMOTE_ADDR']`. Default `true`
`Kint::$plugins` | List of enabled plugins. Either string class names or instances. Plugins added through the Kint class will be cached and need to work with multiple parser instances. See [plugins page]({{ site.baseurl }}/plugins/) for more information.
`Kint::$max_depth` | The maximum depth to parse. 0 for unlimited. Tweak this to balance performance and verbosity. Default 6.
`Kint::$aliases` | List of helper function aliases. Either string for a function name, or array of two strings for a static method.
`Kint::$app_root_dirs` | An array of paths to aliases. These will be replaced in the mini trace, backtraces, etc. Default maps `$_SERVER['DOCUMENT_ROOT']` to `<ROOT>`
`Kint_Renderer_Rich::$theme` | Which theme to use. One of the CSS files from `resources/compiled/` if using composer, or the full path to a CSS file. Default `original.css`

</section>
<section id="kint" markdown="1">

## Kint settings

Other Kint settings

`Kint::$cli_detection` | Whether to detect if it's being run in a CLI and adjust the renderer. Default `true`
`Kint::$display_called_from` | Whether to display the called from (mini trace) information. Default `true`
`Kint::$expanded` | Whether to expand objects by default. Default `false`
`Kint::$file_link_format` | A format to link source code paths to. Default `ini_get('xdebug.file_link_format')`
`Kint::$mode_default_cli` | The mode to select automatically when `$enabled_mode` and `$cli_detection` are true. Default `Kint::MODE_CLI`
`Kint::$mode_default` | The mode to select automatically when `$enabled_mode` is true. Default `Kint::MODE_RICH`
`Kint::$renderers` | A map of render modes to renderer classes.
`Kint::$return` | Whether to return or echo the output. Default `false`

---

`Kint_Object_Blob::$char_encodings` | A list of character encodings to try to identify to be passed to `mb_detect_encoding`

</section>
<section id="rich" markdown="1">

## Rich renderer settings

`Kint_Renderer_Rich::$access_paths` | Enable or disable the showing of access paths. Default `true`
`Kint_Renderer_Rich::$escape_types` | Enable or disable the escaping of types. Enabling will hurt performance, but allow you to use unicode text on non-utf8 web pages. Default `false`
`Kint_Renderer_Rich::$object_renderers` | List of rich renderer object plugins
`Kint_Renderer_Rich::$pre_render_sources` | List of callables to execute or strings to render before initial render.
`Kint_Renderer_Rich::$strlen_max` | The maximum length of text to show in the bar. 0 to disable. Default 80.
`Kint_Renderer_Rich::$tab_renderers` | List of rich renderer tab plugins
`Kint_Renderer_Rich::$theme` | Which theme to use. One of the CSS files from `resources/compiled/` if using composer, or the full path to a CSS file. Default `original.css`

</section>
<section id="text" markdown="1">

## Text renderer settings

`Kint_Renderer_Text::$decorations` | Whether to render decorations around the header and footer. Default `true`
`Kint_Renderer_Text::$default_indent` | The indentation level in spaces. Default 4
`Kint_Renderer_Text::$default_width` | The width of header and footer decorations. Default 80
`Kint_Renderer_Text::$object_renderers` | List of text renderer plugins.
`Kint_Renderer_Text::$parser_plugin_whitelist` | List of whitelisted parser plugins. Any parser plugins not in this whitelist will not be added to the parser for performance reasons, and because their output isn't used in the text renderer.
`Kint_Renderer_Text::$strlen_max` | The maximum length of text. 0 to disable. Default 0.

---

The plain renderer inherits from the text renderer.

`Kint_Renderer_Plain::$pre_render_sources` | List of callables to execute or strings to render before initial render.
`Kint_Renderer_Plain::$theme` | Which theme to use. One of the CSS files from `resources/compiled/` if using composer, or the full path to a CSS file. Default `plain.css`
`Kint_Renderer_Plain::$disable_utf8` | Whether to disable the utf-8 parts of the decorations and use htmlentities instead. Vastly increases output size. If <a href="http://utf8everywhere.org/" target="_blank">your web page isn't in utf-8</a>, set this to `true`. Default `false`

---

The CLI renderer inherits from the text renderer.

`Kint_Renderer_Cli::$cli_colors` | Whether to print color codes. Default `true`
`Kint_Renderer_Cli::$force_utf8` | Whether to force default utf-8 output on windows. Default `false`
`Kint_Renderer_Cli::$detect_width` | Whether to detect the terminal width on startup and adjust the header and footer widths accordingly. Default `true`

</section>

<h2><a href="{{ site.baseurl }}/contrib/">Improving Kint &raquo;</a></h2>

</div>