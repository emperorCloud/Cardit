# CARDIT — Direction artistique (v2, thème clair)

Suite au retour client : le thème sombre initial ne correspondait pas à
l'image voulue. Nouvelle direction imposée par le client : **blanc / gris /
cyan**, mobile-first, aucun bandeau noir en header/footer.

## Palette
- Blanc (fond principal)        #FFFFFF
- Gris clair (fond alterné)     #F1F4F7  (mist)
- Ligne / bordure               #E2E7EC  (line)
- Graphite (texte principal)    #12161C
- Gris-acier (texte secondaire) #5B6774  (steel)
- Cyan (accent marque)          #0FB4C4
- Cyan foncé (hover/liens)      #0C8F9C
- Cyan très clair (fonds accent)#E5F8FA  (cyan-soft)

Plus d'ocre, plus de fond nuit : header et footer sont désormais blanc /
gris clair, cohérents avec le reste du site. Le cyan (déjà présent dans le
logo fourni) reste le seul accent de marque.

## Typographie
Inchangée : Space Grotesk (display, gras) + Manrope (corps).

## Signature
Le motif « contour → circuit » est conservé mais redessiné en traits cyan et
gris-acier sur fond blanc, avec une opacité plus forte pour rester visible
sur fond clair.

## Mobile-first
- Tailles de police et espacements définis pour mobile par défaut, puis
  augmentés via `md:`/`sm:` (jamais l'inverse).
- Boutons pleine largeur sur mobile quand pertinent (CTA bande finale).
- Menu mobile : panneau plein largeur, cible tactile >= 44px.
- `section-pad` réduit sur mobile (py-16) et augmente sur desktop (py-24).
