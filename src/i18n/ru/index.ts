/* eslint-disable @typescript-eslint/naming-convention */
import type { BaseTranslation } from '../i18n-types';

const ru = {
  command: 'Экспортировать как изображение',
  noActiveFile: 'Пожалуйста, сначала откройте статью!',
  imageExportPreview: 'Предпросмотр экспорта изображения',
  copiedSuccess: 'Скопировано в буфер обмена',
  copy: 'Копировать в буфер обмена',
  copyFail: 'Не удалось скопировать',
  notAllowCopy: 'Невозможно напрямую копировать формат {format}',
  save: 'Сохранить изображение',
  saveSuccess: 'Изображение экспортировано и сохранено как {filePath: string}.',
  saveFail: 'Не удалось сохранить изображение',
  saveVault: 'Сохранить в хранилище',
  includingFilename: 'Включая имя файла в качестве заголовка',
  imageWidth: 'Ширина изображения',
  fontSize: 'Размер шрифта',
  fontSizeSmall: 'Маленький',
  fontSizeMedium: 'Средний',
  fontSizeLarge: 'Большой',
  fontSizeExtraLarge: 'Очень большой',
  exportImage: 'Экспорт в изображение',
  exportSelectionImage: 'Экспорт выделения в изображение',
  exportFolder: 'Экспорт всех заметок в изображение',
  resolutionMode: 'Использовать изображение с высоким разрешением',
  invalidWidth: 'Пожалуйста, установите разумную ширину.',
  '2x': 'Включить изображение с разрешением 2x',
  moreSetting:
    'Более детальные настройки можно найти в настройках плагина `Экспорт изображения`.',
  guide: 'Перетаскивайте для перемещения, прокручивайте или сжимайте для масштабирования, дважды щелкните для сброса.',
  copyNotAllowed: 'Формат pdf не поддерживается для копирования',
  exportAll: 'Экспортировать выбранные заметки',
  noMarkdownFile: 'В текущем каталоге нет файлов markdown',
  selectAll: 'Выбрать все',
  setting: {
    title: 'Экспорт изображения',
    imageWidth: {
      label: 'Стандартная ширина экспортируемого изображения',
      description:
        'Установите ширину экспортируемого изображения в пикселях. По умолчанию 640px.',
    },
    split: {
      title: 'Разделение изображения',
      mode: {
        label: 'Режим разделения',
        description: 'Выберите способ разделения изображения, в том числе высоту страницы, перекрытие между страницами и режим разделения.',
        none: 'Нет разделения',
        fixed: 'Фиксированная высота',
        hr: 'Горизонтальная линия',
        auto: 'Параграф',
      },
      height: {
        label: 'Высота страницы',
        description:
          'Устанавливает высоту каждой разделенной страницы в пикселях. По умолчанию 1000px.',
      },
      overlap: {
        label: 'Перекрытие',
        description:
          'Устанавливает перекрытие между страницами, чтобы избежать резкого обрыва содержимого. По умолчанию 40px.',
      },
    },
    filename: {
      label: 'Включить имя файла в качестве заголовка',
      description:
        'Установите, следует ли включать имя файла в качестве заголовка. Когда Obsidian отображает документ, он отображает имя файла в качестве заголовка h1. Иногда это не то, что вы хотите, и вы получите дублирующиеся заголовки.',
    },
    '2x': {
      label: 'Включить изображение с разрешением 2x',
      description:
        'Установите, следует ли включать изображение с разрешением 2x. Изображения с разрешением 2x будут выглядеть более четкими и обеспечат лучший опыт на экранах с высокой PPI, таких как смартфоны. Однако недостаток заключается в том, что размер файла изображений будет больше.',
    },
    metadata: {
      label: 'Показать метаданные',
    },
    format: {
      title: 'Формат выходного файла',
      description:
        'Изображения в формате PNG по умолчанию должны удовлетворить большинство потребностей, но для лучшей поддержки пользовательских сценариев: 1. Поддержка экспорта изображений с обычными и прозрачными фонами; 2. Поддержка экспорта изображений в формате JPG для уменьшения размера файла, хотя возможно, что невозможно будет скопировать напрямую в буфер обмена; 3. Поддержка экспорта в формат одностраничного PDF, который отличается от обычных форматов бумаги PDF, пожалуйста, будьте осторожны, чтобы не использовать его неправильно.',
      png0: '.png - по умолчанию',
      png1: '.png - изображение с прозрачным фоном',
      jpg: '.jpg - изображение в формате jpg',
      pdf: '.pdf - одностраничный PDF',
    },
    quickExportSelection: {
      label: 'Экспортировать выбранное',
      description: 'Если включено, процесс настройки будет пропущен при экспорте выбранных заметок, и экспортированное изображение будет скопировано непосредственно в буфер обмена.',
    },
    userInfo: {
      title: 'Информация об авторе',
      show: 'Показать информацию об авторе',
      avatar: {
        title: 'Аватар',
        description: 'Рекомендуется использовать квадратные изображения',
      },
      name: 'Имя автора',
      position: 'Где отображать',
      remark: 'Дополнительный текст',
      align: 'Выровнять',
      removeAvatar: 'Удалить аватар',
    },
    watermark: {
      title: 'Водяной знак',
      enable: {
        label: 'Включить водяной знак',
        description:
          'Включить водяной знак, поддерживает текстовый и изображенческий водяные знаки.',
      },
      type: {
        label: 'Тип водяного знака',
        description: 'Установите тип водяного знака, текст или изображение.',
        text: 'Текст',
        image: 'Изображение',
      },
      text: {
        content: 'Содержание текста',
        fontSize: 'Размер шрифта водяного знака',
        color: 'Цвет текста водяного знака',
      },
      image: {
        src: {
          label: 'URL изображения',
          upload: 'Загрузить изображение',
          select: 'Выбрать из хранилища',
        },
      },
      opacity: 'Прозрачность водяного знака (0 прозрачный, 1 непрозрачный)',
      rotate: 'Поворот водяного знака (в градусах)',
      width: 'Ширина водяного знака',
      height: 'Высота водяного знака',
      x: 'Горизонтальное расстояние водяного знака',
      y: 'Вертикальное расстояние водяного знака',
    },
    preview: 'Предпросмотр водяного знака',
    reset: 'Сбросить по умолчанию',
    recursive: 'Включить заметки из поддиректорий',
  },
  imageSelect: {
    search: 'Поиск',
    select: 'Выбрать',
    cancel: 'Отмена',
    empty: 'Изображения не найдены',
  },
  confirm: 'Подтвердить',
  cancel: 'Отмена',
  imageUrl: 'URL изображения',
  splitInfo: 'Общая высота изображения составляет {rootHeight}px, а высота разделения составляет {splitHeight}px, поэтому будет создано {pages} изображений',
  splitInfoHr: 'Общая высота изображения составляет {rootHeight}px, и высота разделения составляет {splitHeight}px, поэтому будет создано {pages} изображений',
  loading: 'Загрузка содержимого документа...',
} satisfies BaseTranslation;

export default ru;
