## 🚀 How to Run

Install [Presenterm](https://github.com/mfontanini/presenterm), then run:

```bash
cd markdown_files/
presenterm some.md 
presenterm -x some.md 
```

## Requirements
- Linux environment
- Basic terminal knowledge

## PDF Convert
```bash
for f in *.md; do presenterm -e "$f"; done
for f in *.md; do presenterm -e -x "$f"; done
```

## PDF to cut
```bash
pdftk practice.pdf cat 1 2 3 4 5 6 7 8 9 11 13 15 47 output selected_slides.pdf
```

## PDF to unite
```bash
pdfunite section*.pdf combined_manual.pdf
```
