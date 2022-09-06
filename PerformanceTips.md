# How to resize image recursively (use for project folder)

## Resize them

for i in *.jpeg; do ffmpeg -y -i "$i" -vf scale=300:-1 "${i%.*}_.jpeg"; done
for i in *.jpg; do ffmpeg -y -i "$i" -vf scale=300:-1 "${i%.*}_.jpg"; done
for i in *.png; do ffmpeg -y -i "$i" -vf scale=300:-1 "${i%.*}_.png"; done

## Rename them

for x in *; do mv -- "$x" "${x//_/}"; done