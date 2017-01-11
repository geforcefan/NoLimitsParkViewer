# NoLimitsParkViewer
NL2Park parser and viewer written in TypeScript for web usage

# Compatibility

Safari is not supported yet. This works both on Firefox and Chrome. Firefox is parsing the nl2park files way faster than Chrome, but the WebGL Engine of Chrome is way smoother.

# Performance

Firefox will perform very fast compared to Chrome when it comes to loading and parsing nl2park files. Maybe because of the Garbage Collector implementation of Chrome, I don´t know yet. Didn´t analysed this stuff yet. This Viewer is also in its early alpha stages, so don´t expect something magic.

# Usage

You can use this viewer as a preview renderer on any NoLimits exchanging websites (to provide users a preview of the park before they download the nl2parks). You also can extract the part where the nl2park is being read and parsed to store the nl2park information anywhere or building an own renderer (maybe to generate a 2D view from the top perspective).

# Example

- Preloaded Fenrir.nl2park:

https://cdn.rawgit.com/geforcefan/NoLimitsParkViewer/bb46d193/dist/index_preloaded.html

- Drag and Drop own NL2Park files:

https://cdn.rawgit.com/geforcefan/NoLimitsParkViewer/bb46d193/dist/index_draganddrop.html

# Used 3rd party libraries

- Implemented a TypeScript version of "Cubic Spline interpolation in C++": 

http://kluge.in-chemnitz.de/opensource/spline/

- Implemented a TypeScript version of the camera calculations used on openFVD made by altlenny: 

https://github.com/altlenny/openFVD


#######################
# License information #
#######################

NoLimitsParkViewer
Copyright (C) 2017, Ercan Akyürek <ercan.akyuerek@gmail.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
