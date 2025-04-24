/* eslint-disable @typescript-eslint/naming-convention */
import type { Translation } from '../i18n-types';

const de = {
  // TODO: Ihre Übersetzungen hier eingeben
  command: 'Als Bild exportieren',
  noActiveFile: 'Bitte öffnen Sie zuerst einen Artikel!',
  imageExportPreview: 'Bildexport-Vorschau',
  copiedSuccess: 'In die Zwischenablage kopiert',
  copy: 'In Zwischenablage kopieren',
  copyFail: 'Kopieren fehlgeschlagen',
  notAllowCopy: 'Direktes Kopieren des {format} Formats nicht möglich',
  save: 'Bild speichern',
  saveSuccess: 'Das Bild wurde erfolgreich als {filePath} gespeichert.',
  saveFail: 'Das Bild konnte nicht gespeichert werden',
  saveVault: 'Im Tresor speichern',
  includingFilename: 'Mit Dateinamen als Titel einschließen',
  imageWidth: 'Bildbreite',
  fontSize: 'Schriftgröße',
  fontSizeSmall: 'Klein',
  fontSizeMedium: 'Mittel',
  fontSizeLarge: 'Groß',
  fontSizeExtraLarge: 'Sehr Groß',
  exportImage: 'Als Bild exportieren',
  exportSelectionImage: 'Auswahl als Bild exportieren',
  exportFolder: 'Alle Notizen als Bild exportieren',
  loading: 'Dokumentinhalt wird geladen...',
  invalidWidth: 'Bitte setzen Sie eine vernünftige Breite.',
  resolutionMode: 'Bild mit höherer Auflösung verwenden',
  moreSetting:
    'Detailliertere Einstellungen finden Sie in den `Bild exportieren` Plugin-Einstellungen.',
  guide: 'Ziehen zum Bewegen, scrollen oder kneifen zum Zoomen, Doppelklick zum Zurücksetzen.',
  copyNotAllowed: 'Das pdf-Format wird für das Kopieren nicht unterstützt',
  exportAll: 'Ausgewählte Notizen exportieren',
  noMarkdownFile: 'Keine Markdown-Dateien im aktuellen Verzeichnis',
  selectAll: 'Alles auswählen',
  setting: {
    title: 'Bild exportieren',
    imageWidth: {
      label: 'Standardmäßige exportierte Bildbreite',
      description:
        'Setzen Sie die Breite des exportierten Bildes in Pixel. Standardmäßig ist 640px.',
    },
    padding: {
      title: 'Bildrand',
      description: 'Stellen Sie den Innenabstand für das exportierte Bild ein. Der Standardwert beträgt 6px für alle Seiten.',
      top: 'Oberer Abstand',
      right: 'Rechter Abstand',
      bottom: 'Unterer Abstand',
      left: 'Linker Abstand',
    },
    split: {
      title: 'Bild aufteilen',
      mode: {
        label: 'Aufteilungsmodus',
        description: 'Wählen Sie, wie Sie das Bild aufteilen möchten, und wie Sie es aufteilen möchten. Die feste Höhe bedeutet, dass jede geteilte Seite eine feste Höhe hat, die möglicherweise den Text an den Aufteilungspunkten abschneidet. Die horizontale Linie bedeutet, dass das Bild nach horizontalen Linien im Dokument aufgeteilt wird. Der Absatz bedeutet, dass das Bild nach Absätzen aufgeteilt wird, um zu vermeiden, dass ein Absatz in zwei Bildern aufgeteilt wird und die Höhe so nahe wie möglich zur Aufteilungshöhe ist.',
        none: 'Keine Aufteilung',
        fixed: 'Festgelegte Höhe',
        hr: 'Horizontale Linie',
        auto: 'Absatz',
      },
      height: {
        label: 'Seitenhöhe',
        description: 'Legt die Höhe jeder geteilten Seite in Pixeln fest. Standard ist 1000px.',
      },
      overlap: {
        label: 'Überlappungsabstand',
        description: 'Legt den Überlappungsabstand zwischen den Seiten fest, um abrupte Inhaltsabschnitte zu vermeiden. Standard ist 40px.',
      },
    },
    filename: {
      label: 'Dateinamen als Titel einbeziehen',
      description:
        'Stellen Sie ein, ob der Dateiname als Titel einbezogen werden soll. Wenn Obsidian das Dokument anzeigt, wird der Dateiname als h1 Titel angezeigt. Manchmal ist das nicht erwünscht, und Sie erhalten doppelte Titel.',
    },
    resolutionMode: {
      label: 'Bild in Auflösungsmodus',
      description: 'Setzen Sie den Auflösungsmodus, verwenden Sie Bilder mit 1x, 2x, 3x, 4x Auflösung. Wenn aktiviert, erscheinen Bilder schärfer, mit einer besseren Erfahrung auf hochauflösenden Bildschirmen wie Smartphones. Der Nachteil ist, dass die Bilddateigröße zunimmt.',
    },
    metadata: {
      label: 'Metadaten anzeigen',
    },
    format: {
      title: 'Ausgabeformat der Datei',
      description:
        'Standardmäßige PNG-Formatbilder sollten die Mehrheit der Bedürfnisse erfüllen, aber um Benutzerszenarien besser zu unterstützen: 1. Unterstützung für den Export von Bildern mit normalem und transparentem Hintergrund; 2. Unterstützung für den Export von JPG-Bildern zur Erreichung kleinerer Dateigrößen, obwohl es möglicherweise nicht möglich ist, direkt in die Zwischenablage zu kopieren; 3. Unterstützung für den Export in das Einzelseiten-PDF-Format, das sich von den üblichen PDF-Papierformaten unterscheidet, bitte Vorsicht, um keine Verwechslung zu verursachen.',
      png0: 'png - Standard',
      png1: 'png - Bild mit transparentem Hintergrund exportieren',
      jpg: 'jpg - jpg-Bild exportieren',
      pdf: 'pdf - Einzelseiten-PDF exportieren',
    },
    quickExportSelection: {
      label: 'Schnellauswahl exportieren',
      description: 'Wenn aktiviert, wird der Konfigurationsprozess übersprungen, wenn Sie ausgewählte Notizen exportieren, und das exportierte Bild wird direkt in die Zwischenablage kopiert.',
    },
    userInfo: {
      title: 'Autoreninfo',
      show: 'Autoreninfo anzeigen',
      avatar: {
        title: 'Avatar',
        description: 'Es wird empfohlen, quadratische Bilder zu verwenden',
      },
      name: 'Autorenname',
      position: 'Anzeigeposition',
      remark: 'Zusätzlicher Text',
      align: 'Ausrichtung',
      removeAvatar: 'Avatar entfernen',
    },
    watermark: {
      title: 'Wasserzeichen',
      enable: {
        label: 'Wasserzeichen aktivieren',
        description:
          'Wasserzeichen aktivieren, unterstützt Text- und Bildwasserzeichen.',
      },
      type: {
        label: 'Wasserzeichentyp',
        description: 'Legen Sie den Typ des Wasserzeichens fest, Text oder Bild.',
        text: 'Text',
        image: 'Bild',
      },
      text: {
        content: 'Wasserzeichentextinhalt',
        fontSize: 'Schriftgröße des Wasserzeichens',
        color: 'Wasserzeichentextfarbe',
      },
      image: {
        src: {
          label: 'Bild-URL',
          upload: 'Bild hochladen',
          select: 'Aus aktuellem Tresor wählen',
        },
      },
      opacity: 'Wasserzeichen-Durchsichtigkeit (0 ist transparent, 1 ist nicht transparent)',
      rotate: 'Wasserzeichen-Drehung (in Grad)',
      width: 'Wasserzeichenbreite',
      height: 'Wasserzeichenhöhe',
      x: 'Horizontaler Abstand des Wasserzeichens',
      y: 'Vertikaler Abstand des Wasserzeichens',
    },
    preview: 'Wasserzeichen-Effektvorschau',
    reset: 'Auf Standard zurücksetzen',
    recursive: 'Notizen aus Unterordnern einbeziehen',
  },
  imageSelect: {
    search: 'Suchen',
    select: 'Auswählen',
    cancel: 'Abbrechen',
    empty: 'Kein Bild gefunden',
  },
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  imageUrl: 'URL eingeben',
  splitInfo: 'Die Gesamthöhe des Bildes beträgt {rootHeight}px, und die Höhe der Aufteilung beträgt {splitHeight}px, sodass {pages} Bilder generiert werden.',
  splitInfoHr: 'Die Gesamthöhe des Bildes beträgt {rootHeight}px, und die Höhe der Aufteilung beträgt {splitHeight}px, sodass {pages} Bilder generiert werden.',
} satisfies Translation;

export default de;
