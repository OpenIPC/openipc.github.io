#!/bin/sh
#
# More info:
# http://najomi.org/_nix/imagemagick


cd ../../images
#
for f in partner_*_orig.png; do echo $f; $(convert $f -resize x50 ${f%_orig.png}_mini.png); done
#
montage -geometry +30+30 -tile 4 partner_*_mini.png partners_all.png
#
cd -
#