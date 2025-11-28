{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    # PDF tools
    pdftk
    poppler_utils
    # For presentations
    kitty
    mermaid-cli
    presenterm

    # Python with WeasyPrint
    (python313.withPackages (ps: [
      ps.weasyprint
      ps.requests
      ps.flask
    ]))
  ];

  shellHook = ''
    echo "✅ Development shell ready."
  '';
}

