# NoLimitsParkViewer
NL2Park parser and viewer written in TypeScript for web usage

# Compatibility

Safari is not supported yet. This works both on Firefox and Chrome. Firefox is parsing the nl2park files way faster than Chrome, but the WebGL Engine of Chrome is way smoother.

# Performance

Loading nl2park files is pretty fast on Firefox compared to Chrome. Maybe because of the Garbage Collector implementation of Chrome, I don´t know yet. Didn´t analysed the stuff yet. This Viewer is also in its early alpha stages.

# Usage

You can use this Viewer as a Preview for any NoLimits Exchange website, to provide users a preview of the park before they download the nl2parks. You also can extract the part where the nl2park is being read and parsed to store the nl2park information anywhere or building an own renderer (maybe to generate a 2D view from the top perspective).

# Example

- Preloaded:

https://cdn.rawgit.com/geforcefan/NoLimitsParkViewer/bb46d193/dist/index_preloaded.html

- Drag and Drop own NL2Park files:

https://cdn.rawgit.com/geforcefan/NoLimitsParkViewer/bb46d193/dist/index_draganddrop.html
