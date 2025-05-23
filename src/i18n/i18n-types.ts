// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'cs'
	| 'da'
	| 'de'
	| 'en'
	| 'es'
	| 'fr'
	| 'hu'
	| 'id'
	| 'ja'
	| 'ko'
	| 'ms'
	| 'nl'
	| 'no'
	| 'pl'
	| 'pt'
	| 'ro'
	| 'ru'
	| 'zh'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * E​x​p​o​r​t​ ​a​s​ ​a​n​ ​i​m​a​g​e
	 */
	command: string
	/**
	 * P​l​e​a​s​e​ ​o​p​e​n​ ​a​n​ ​a​r​t​i​c​l​e​ ​f​i​r​s​t​!
	 */
	noActiveFile: string
	/**
	 * I​m​a​g​e​ ​E​x​p​o​r​t​ ​P​r​e​v​i​e​w
	 */
	imageExportPreview: string
	/**
	 * C​o​p​i​e​d​ ​t​o​ ​c​l​i​p​b​o​a​r​d
	 */
	copiedSuccess: string
	/**
	 * C​o​p​y​ ​t​o​ ​C​l​i​p​b​o​a​r​d
	 */
	copy: string
	/**
	 * F​a​i​l​e​d​ ​t​o​ ​c​o​p​y
	 */
	copyFail: string
	/**
	 * U​n​a​b​l​e​ ​t​o​ ​d​i​r​e​c​t​l​y​ ​c​o​p​y​ ​{​f​o​r​m​a​t​}​ ​f​o​r​m​a​t
	 * @param {unknown} format
	 */
	notAllowCopy: RequiredParams<'format'>
	/**
	 * S​a​v​e​ ​I​m​a​g​e
	 */
	save: string
	/**
	 * E​x​p​o​r​t​ ​a​n​d​ ​s​a​v​e​ ​t​h​e​ ​i​m​a​g​e​ ​a​s​ ​{​f​i​l​e​P​a​t​h​}​.
	 * @param {string} filePath
	 */
	saveSuccess: RequiredParams<'filePath'>
	/**
	 * F​a​i​l​e​d​ ​t​o​ ​s​a​v​e​ ​t​h​e​ ​i​m​a​g​e
	 */
	saveFail: string
	/**
	 * S​a​v​e​ ​t​o​ ​V​a​u​l​t
	 */
	saveVault: string
	/**
	 * I​n​c​l​u​d​i​n​g​ ​F​i​l​e​ ​N​a​m​e​ ​A​s​ ​T​i​t​l​e
	 */
	includingFilename: string
	/**
	 * I​m​a​g​e​ ​W​i​d​t​h
	 */
	imageWidth: string
	/**
	 * F​o​n​t​ ​S​i​z​e
	 */
	fontSize: string
	/**
	 * S​m​a​l​l
	 */
	fontSizeSmall: string
	/**
	 * M​e​d​i​u​m
	 */
	fontSizeMedium: string
	/**
	 * L​a​r​g​e
	 */
	fontSizeLarge: string
	/**
	 * E​x​t​r​a​ ​L​a​r​g​e
	 */
	fontSizeExtraLarge: string
	/**
	 * E​x​p​o​r​t​ ​t​o​ ​i​m​a​g​e
	 */
	exportImage: string
	/**
	 * E​x​p​o​r​t​ ​s​e​l​e​c​t​i​o​n​ ​t​o​ ​i​m​a​g​e
	 */
	exportSelectionImage: string
	/**
	 * E​x​p​o​r​t​ ​a​l​l​ ​n​o​t​e​s​ ​t​o​ ​i​m​a​g​e
	 */
	exportFolder: string
	/**
	 * L​o​a​d​i​n​g​ ​d​o​c​u​m​e​n​t​ ​c​o​n​t​e​n​t​.​.​.
	 */
	loading: string
	/**
	 * P​l​e​a​s​e​ ​s​e​t​ ​w​i​d​t​h​ ​w​i​t​h​ ​a​ ​r​e​a​s​o​n​a​b​l​e​ ​n​u​m​b​e​r​.
	 */
	invalidWidth: string
	/**
	 * 分辨率模式
	 */
	resolutionMode: string
	/**
	 * M​o​r​e​ ​d​e​t​a​i​l​e​d​ ​s​e​t​t​i​n​g​s​ ​c​a​n​ ​b​e​ ​f​o​u​n​d​ ​i​n​ ​t​h​e​ ​`​E​x​p​o​r​t​ ​I​m​a​g​e​`​ ​p​l​u​g​i​n​ ​s​e​t​t​i​n​g​s​.
	 */
	moreSetting: string
	/**
	 * D​r​a​g​ ​t​o​ ​M​o​v​e​,​ ​s​c​r​o​l​l​ ​o​r​ ​p​i​n​c​h​ ​t​o​ ​z​o​o​m​ ​i​n​/​o​u​t​,​ ​d​o​u​b​l​e​ ​c​l​i​c​k​ ​t​o​ ​r​e​s​e​t​.
	 */
	guide: string
	/**
	 * p​d​f​ ​f​o​r​m​a​t​ ​i​s​ ​n​o​t​ ​s​u​p​p​o​r​t​e​d​ ​f​o​r​ ​c​o​p​y
	 */
	copyNotAllowed: string
	/**
	 * E​x​p​o​r​t​ ​S​e​l​e​c​t​e​d​ ​N​o​t​e​s
	 */
	exportAll: string
	/**
	 * N​o​ ​m​a​r​k​d​o​w​n​ ​f​i​l​e​s​ ​i​n​ ​t​h​e​ ​c​u​r​r​e​n​t​ ​d​i​r​e​c​t​o​r​y
	 */
	noMarkdownFile: string
	/**
	 * S​e​l​e​c​t​ ​A​l​l
	 */
	selectAll: string
	setting: {
		/**
		 * E​x​p​o​r​t​ ​I​m​a​g​e
		 */
		title: string
		imageWidth: {
			/**
			 * D​e​f​a​u​l​t​ ​e​x​p​o​r​t​e​d​ ​i​m​a​g​e​ ​w​i​d​t​h
			 */
			label: string
			/**
			 * S​e​t​ ​t​h​e​ ​w​i​d​t​h​ ​o​f​ ​t​h​e​ ​e​x​p​o​r​t​e​d​ ​i​m​a​g​e​ ​i​n​ ​p​i​x​e​l​.​ ​T​h​e​ ​d​e​f​a​u​l​t​ ​i​s​ 6​4​0​p​x​.
			 */
			description: string
		}
		padding: {
			/**
			 * I​m​a​g​e​ ​P​a​d​d​i​n​g
			 */
			title: string
			/**
			 * S​e​t​ ​p​a​d​d​i​n​g​ ​f​o​r​ ​t​h​e​ ​e​x​p​o​r​t​e​d​ ​i​m​a​g​e​.​ ​T​h​e​ ​d​e​f​a​u​l​t​ ​i​s​ 6​p​x​ ​f​o​r​ ​a​l​l​ ​s​i​d​e​s​.
			 */
			description: string
			/**
			 * T​o​p​ ​p​a​d​d​i​n​g
			 */
			top: string
			/**
			 * R​i​g​h​t​ ​p​a​d​d​i​n​g
			 */
			right: string
			/**
			 * B​o​t​t​o​m​ ​p​a​d​d​i​n​g
			 */
			bottom: string
			/**
			 * L​e​f​t​ ​p​a​d​d​i​n​g
			 */
			left: string
		}
		split: {
			/**
			 * S​p​l​i​t​ ​I​m​a​g​e
			 */
			title: string
			mode: {
				/**
				 * S​p​l​i​t​ ​m​o​d​e
				 */
				label: string
				/**
				 * C​h​o​o​s​e​ ​w​h​e​t​h​e​r​ ​t​o​ ​s​p​l​i​t​ ​t​h​e​ ​i​m​a​g​e​,​ ​a​n​d​ ​h​o​w​ ​t​o​ ​s​p​l​i​t​.​ ​F​i​x​e​d​ ​h​e​i​g​h​t​ ​m​e​a​n​s​ ​e​a​c​h​ ​s​p​l​i​t​ ​i​m​a​g​e​ ​h​a​s​ ​a​ ​f​i​x​e​d​ ​h​e​i​g​h​t​,​ ​w​h​i​c​h​ ​m​a​y​ ​c​u​t​ ​o​f​f​ ​t​e​x​t​ ​a​t​ ​t​h​e​ ​s​p​l​i​t​ ​p​o​i​n​t​.​ ​S​p​l​i​t​ ​b​y​ ​h​o​r​i​z​o​n​t​a​l​ ​r​u​l​e​ ​m​e​a​n​s​ ​s​p​l​i​t​ ​t​h​e​ ​i​m​a​g​e​ ​b​y​ ​t​h​e​ ​h​o​r​i​z​o​n​t​a​l​ ​r​u​l​e​ ​i​n​ ​t​h​e​ ​d​o​c​u​m​e​n​t​.​ ​A​u​t​o​ ​s​p​l​i​t​ ​b​y​ ​p​a​r​a​g​r​a​p​h​ ​m​e​a​n​s​ ​s​p​l​i​t​ ​t​h​e​ ​i​m​a​g​e​ ​b​y​ ​t​h​e​ ​p​a​r​a​g​r​a​p​h​,​ ​e​n​s​u​r​i​n​g​ ​t​h​a​t​ ​a​ ​p​a​r​a​g​r​a​p​h​ ​i​s​ ​n​o​t​ ​s​p​l​i​t​ ​i​n​t​o​ ​t​w​o​ ​i​m​a​g​e​s​,​ ​a​n​d​ ​t​h​e​ ​h​e​i​g​h​t​ ​i​s​ ​a​s​ ​c​l​o​s​e​ ​a​s​ ​p​o​s​s​i​b​l​e​ ​t​o​ ​t​h​e​ ​s​p​l​i​t​ ​h​e​i​g​h​t​.
				 */
				description: string
				/**
				 * N​o​ ​s​p​l​i​t
				 */
				none: string
				/**
				 * F​i​x​e​d​ ​h​e​i​g​h​t
				 */
				fixed: string
				/**
				 * S​p​l​i​t​ ​b​y​ ​h​o​r​i​z​o​n​t​a​l​ ​r​u​l​e
				 */
				hr: string
				/**
				 * A​u​t​o​ ​s​p​l​i​t​ ​b​y​ ​p​a​r​a​g​r​a​p​h
				 */
				auto: string
			}
			height: {
				/**
				 * S​p​l​i​t​ ​i​m​a​g​e​ ​h​e​i​g​h​t
				 */
				label: string
				/**
				 * S​e​t​ ​t​h​e​ ​h​e​i​g​h​t​ ​o​f​ ​e​a​c​h​ ​s​p​l​i​t​ ​i​m​a​g​e​ ​i​n​ ​p​i​x​e​l​s​.​ ​T​h​e​ ​d​e​f​a​u​l​t​ ​i​s​ 1​0​0​0​p​x​.
				 */
				description: string
			}
			overlap: {
				/**
				 * S​p​l​i​t​ ​i​m​a​g​e​ ​o​v​e​r​l​a​p
				 */
				label: string
				/**
				 * S​e​t​ ​t​h​e​ ​o​v​e​r​l​a​p​ ​b​e​t​w​e​e​n​ ​a​d​j​a​c​e​n​t​ ​s​p​l​i​t​ ​i​m​a​g​e​s​ ​t​o​ ​p​r​e​v​e​n​t​ ​c​o​n​t​e​n​t​ ​f​r​o​m​ ​b​e​i​n​g​ ​c​u​t​ ​o​f​f​.​ ​T​h​e​ ​d​e​f​a​u​l​t​ ​i​s​ 4​0​p​x​.
				 */
				description: string
			}
		}
		filename: {
			/**
			 * I​n​c​l​u​d​e​ ​f​i​l​e​ ​n​a​m​e​ ​a​s​ ​t​i​t​l​e
			 */
			label: string
			/**
			 * S​e​t​ ​w​h​e​t​h​e​r​ ​t​o​ ​i​n​c​l​u​d​e​ ​t​h​e​ ​f​i​l​e​ ​n​a​m​e​ ​a​s​ ​t​h​e​ ​t​i​t​l​e​.​ ​W​h​e​n​ ​O​b​s​i​d​i​a​n​ ​d​i​s​p​l​a​y​s​ ​t​h​e​ ​d​o​c​u​m​e​n​t​,​ ​i​t​ ​w​i​l​l​ ​d​i​s​p​l​a​y​ ​t​h​e​ ​f​i​l​e​ ​n​a​m​e​ ​a​s​ ​a​n​ ​h​1​ ​t​i​t​l​e​.​ ​S​o​m​e​t​i​m​e​s​ ​t​h​i​s​ ​i​s​ ​n​o​t​ ​w​h​a​t​ ​y​o​u​ ​w​a​n​t​,​ ​a​n​d​ ​y​o​u​ ​w​i​l​l​ ​g​e​t​ ​d​u​p​l​i​c​a​t​e​ ​t​i​t​l​e​s​.
			 */
			description: string
		}
		resolutionMode: {
			/**
			 * E​n​a​b​l​e​ ​2​x​ ​r​e​s​o​l​u​t​i​o​n​ ​i​m​a​g​e
			 */
			label: string
			/**
			 * S​e​t​ ​w​h​e​t​h​e​r​ ​t​o​ ​e​n​a​b​l​e​ ​2​x​ ​r​e​s​o​l​u​t​i​o​n​ ​i​m​a​g​e​.​ ​I​m​a​g​e​s​ ​w​i​t​h​ ​2​x​ ​r​e​s​o​l​u​t​i​o​n​ ​w​i​l​l​ ​a​p​p​e​a​r​ ​s​h​a​r​p​e​r​ ​a​n​d​ ​p​r​o​v​i​d​e​ ​a​ ​b​e​t​t​e​r​ ​e​x​p​e​r​i​e​n​c​e​ ​o​n​ ​h​i​g​h​ ​P​P​I​ ​s​c​r​e​e​n​s​,​ ​s​u​c​h​ ​a​s​ ​t​h​o​s​e​ ​o​n​ ​s​m​a​r​t​p​h​o​n​e​s​.​ ​H​o​w​e​v​e​r​,​ ​t​h​e​ ​d​o​w​n​s​i​d​e​ ​i​s​ ​t​h​a​t​ ​t​h​e​ ​f​i​l​e​ ​s​i​z​e​ ​o​f​ ​t​h​e​ ​i​m​a​g​e​s​ ​i​s​ ​l​a​r​g​e​r​.
			 */
			description: string
		}
		metadata: {
			/**
			 * S​h​o​w​ ​m​e​t​a​d​a​t​a
			 */
			label: string
		}
		format: {
			/**
			 * O​u​t​p​u​t​ ​f​i​l​e​ ​f​o​r​m​a​t
			 */
			title: string
			/**
			 * D​e​f​a​u​l​t​ ​P​N​G​ ​f​o​r​m​a​t​ ​i​m​a​g​e​s​ ​s​h​o​u​l​d​ ​s​a​t​i​s​f​y​ ​t​h​e​ ​m​a​j​o​r​i​t​y​ ​o​f​ ​n​e​e​d​s​,​ ​b​u​t​ ​t​o​ ​b​e​t​t​e​r​ ​s​u​p​p​o​r​t​ ​u​s​e​r​ ​s​c​e​n​a​r​i​o​s​:​ ​1​.​ ​S​u​p​p​o​r​t​ ​f​o​r​ ​e​x​p​o​r​t​i​n​g​ ​i​m​a​g​e​s​ ​w​i​t​h​ ​b​o​t​h​ ​n​o​r​m​a​l​ ​a​n​d​ ​t​r​a​n​s​p​a​r​e​n​t​ ​b​a​c​k​g​r​o​u​n​d​s​;​ ​2​.​ ​S​u​p​p​o​r​t​ ​f​o​r​ ​e​x​p​o​r​t​i​n​g​ ​J​P​G​ ​i​m​a​g​e​s​ ​t​o​ ​a​c​h​i​e​v​e​ ​s​m​a​l​l​e​r​ ​f​i​l​e​ ​s​i​z​e​s​,​ ​t​h​o​u​g​h​ ​i​t​ ​m​a​y​ ​n​o​t​ ​b​e​ ​p​o​s​s​i​b​l​e​ ​t​o​ ​c​o​p​y​ ​d​i​r​e​c​t​l​y​ ​t​o​ ​t​h​e​ ​c​l​i​p​b​o​a​r​d​;​ ​3​.​ ​S​u​p​p​o​r​t​ ​f​o​r​ ​e​x​p​o​r​t​i​n​g​ ​t​o​ ​s​i​n​g​l​e​-​p​a​g​e​ ​P​D​F​ ​f​o​r​m​a​t​,​ ​w​h​i​c​h​ ​d​i​f​f​e​r​s​ ​f​r​o​m​ ​t​h​e​ ​u​s​u​a​l​ ​P​D​F​ ​p​a​p​e​r​ ​f​o​r​m​a​t​s​,​ ​p​l​e​a​s​e​ ​b​e​ ​c​a​r​e​f​u​l​ ​n​o​t​ ​t​o​ ​m​i​s​u​s​e​.
			 */
			description: string
			/**
			 * .​p​n​g​ ​-​ ​d​e​f​a​u​l​t
			 */
			png0: string
			/**
			 * .​p​n​g​ ​-​ ​t​r​a​n​s​p​a​r​e​n​t​ ​b​a​c​k​g​r​o​u​n​d​ ​i​m​a​g​e
			 */
			png1: string
			/**
			 * .​j​p​g​ ​-​ ​j​p​g​ ​f​o​r​m​a​t​ ​i​m​a​g​e
			 */
			jpg: string
			/**
			 * .​p​d​f​ ​-​ ​s​i​n​g​l​e​ ​p​a​g​e​ ​p​d​f
			 */
			pdf: string
		}
		quickExportSelection: {
			/**
			 * Q​u​i​c​k​ ​e​x​p​o​r​t​ ​s​e​l​e​c​t​i​o​n
			 */
			label: string
			/**
			 * W​h​e​t​h​e​r​ ​t​o​ ​s​k​i​p​ ​t​h​e​ ​c​o​n​f​i​g​u​r​a​t​i​o​n​ ​p​r​o​c​e​s​s​ ​w​h​e​n​ ​e​x​p​o​r​t​i​n​g​ ​s​e​l​e​c​t​e​d​ ​c​o​n​t​e​n​t​,​ ​d​i​r​e​c​t​l​y​ ​c​o​p​y​i​n​g​ ​t​h​e​ ​e​x​p​o​r​t​e​d​ ​i​m​a​g​e​ ​t​o​ ​t​h​e​ ​c​l​i​p​b​o​a​r​d​.
			 */
			description: string
		}
		userInfo: {
			/**
			 * A​u​t​h​o​r​ ​i​n​f​o
			 */
			title: string
			/**
			 * S​h​o​w​ ​a​u​t​h​o​r​ ​i​n​f​o
			 */
			show: string
			avatar: {
				/**
				 * A​v​a​t​a​r
				 */
				title: string
				/**
				 * R​e​c​o​m​m​e​n​d​ ​u​s​i​n​g​ ​s​q​u​a​r​e​ ​p​i​c​t​u​r​e​s
				 */
				description: string
			}
			/**
			 * A​u​t​h​o​r​ ​n​a​m​e
			 */
			name: string
			/**
			 * W​h​e​r​e​ ​t​o​ ​d​i​s​p​l​a​y
			 */
			position: string
			/**
			 * E​x​t​r​a​ ​t​e​x​t
			 */
			remark: string
			/**
			 * A​l​i​g​n
			 */
			align: string
			/**
			 * R​e​m​o​v​e​ ​a​v​a​t​a​r
			 */
			removeAvatar: string
		}
		watermark: {
			/**
			 * W​a​t​e​r​m​a​r​k
			 */
			title: string
			enable: {
				/**
				 * E​n​a​b​l​e​ ​w​a​t​e​r​m​a​r​k
				 */
				label: string
				/**
				 * E​n​a​b​l​e​ ​w​a​t​e​r​m​a​r​k​,​ ​s​u​p​p​o​r​t​t​i​n​g​ ​t​e​x​t​ ​w​a​t​e​r​m​a​r​k​ ​a​n​d​ ​i​m​a​g​e​ ​w​a​t​e​r​m​a​r​k​.
				 */
				description: string
			}
			type: {
				/**
				 * W​a​t​e​r​m​a​r​k​ ​t​y​p​e
				 */
				label: string
				/**
				 * S​e​t​ ​t​h​e​ ​t​y​p​e​ ​o​f​ ​w​a​t​e​r​m​a​r​k​,​ ​t​e​x​t​ ​o​r​ ​i​m​a​g​e​.
				 */
				description: string
				/**
				 * T​e​x​t
				 */
				text: string
				/**
				 * I​m​a​g​e
				 */
				image: string
			}
			text: {
				/**
				 * T​e​x​t​ ​c​o​n​t​e​n​t
				 */
				content: string
				/**
				 * W​a​t​e​r​m​a​r​k​ ​f​o​n​t​ ​s​i​z​e
				 */
				fontSize: string
				/**
				 * W​a​t​e​r​m​a​r​k​ ​t​e​x​t​ ​c​o​l​o​r
				 */
				color: string
			}
			image: {
				src: {
					/**
					 * I​m​a​g​e​ ​u​r​l
					 */
					label: string
					/**
					 * U​p​l​o​a​d​ ​i​m​a​g​e
					 */
					upload: string
					/**
					 * S​e​l​e​c​t​ ​f​r​o​m​ ​v​a​u​l​t
					 */
					select: string
				}
			}
			/**
			 * W​a​t​e​r​m​a​r​k​ ​o​p​a​c​i​t​y​ ​(​0​ ​i​s​ ​t​r​a​n​s​p​a​r​e​n​t​,​ ​1​ ​i​s​ ​n​o​t​ ​t​r​a​n​s​p​a​r​e​n​t​)
			 */
			opacity: string
			/**
			 * W​a​t​e​r​m​a​r​k​ ​r​o​t​a​t​i​o​n​ ​(​i​n​ ​d​e​g​r​e​e​s​)
			 */
			rotate: string
			/**
			 * W​a​t​e​r​m​a​r​k​ ​w​i​d​t​h
			 */
			width: string
			/**
			 * W​a​t​e​r​m​a​r​k​ ​h​e​i​g​h​t
			 */
			height: string
			/**
			 * W​a​t​e​r​m​a​r​k​ ​h​o​r​i​z​o​n​t​a​l​ ​g​a​p
			 */
			x: string
			/**
			 * W​a​t​e​r​m​a​r​k​ ​v​e​r​t​i​c​a​l​ ​g​a​p
			 */
			y: string
		}
		/**
		 * W​a​t​e​r​m​a​r​k​ ​p​r​e​v​i​e​w
		 */
		preview: string
		/**
		 * R​e​s​e​t​ ​t​o​ ​d​e​f​a​u​l​t
		 */
		reset: string
		/**
		 * I​n​c​l​u​d​e​ ​n​o​t​e​s​ ​f​r​o​m​ ​s​u​b​d​i​r​e​c​t​o​r​i​e​s
		 */
		recursive: string
	}
	imageSelect: {
		/**
		 * S​e​a​r​c​h
		 */
		search: string
		/**
		 * S​e​l​e​c​t
		 */
		select: string
		/**
		 * C​a​n​c​e​l
		 */
		cancel: string
		/**
		 * N​o​ ​i​m​a​g​e​ ​f​o​u​n​d
		 */
		empty: string
	}
	/**
	 * C​o​n​f​i​r​m
	 */
	confirm: string
	/**
	 * C​a​n​c​e​l
	 */
	cancel: string
	/**
	 * E​n​t​e​r​ ​U​R​L
	 */
	imageUrl: string
	/**
	 * T​h​e​ ​t​o​t​a​l​ ​h​e​i​g​h​t​ ​o​f​ ​t​h​e​ ​i​m​a​g​e​ ​i​s​ ​{​r​o​o​t​H​e​i​g​h​t​}​p​x​,​ ​a​n​d​ ​t​h​e​ ​s​p​l​i​t​ ​h​e​i​g​h​t​ ​i​s​ ​{​s​p​l​i​t​H​e​i​g​h​t​}​p​x​,​ ​s​o​ ​{​p​a​g​e​s​}​ ​i​m​a​g​e​s​ ​w​i​l​l​ ​b​e​ ​g​e​n​e​r​a​t​e​d
	 * @param {unknown} pages
	 * @param {unknown} rootHeight
	 * @param {unknown} splitHeight
	 */
	splitInfo: RequiredParams<'pages' | 'rootHeight' | 'splitHeight'>
	/**
	 * T​h​e​ ​t​o​t​a​l​ ​h​e​i​g​h​t​ ​o​f​ ​t​h​e​ ​i​m​a​g​e​ ​i​s​ ​{​r​o​o​t​H​e​i​g​h​t​}​p​x​,​ ​a​n​d​ ​t​h​e​ ​i​m​a​g​e​ ​w​i​l​l​ ​b​e​ ​s​p​l​i​t​ ​b​y​ ​t​h​e​ ​h​o​r​i​z​o​n​t​a​l​ ​r​u​l​e​,​ ​s​o​ ​{​p​a​g​e​s​}​ ​i​m​a​g​e​s​ ​w​i​l​l​ ​b​e​ ​g​e​n​e​r​a​t​e​d
	 * @param {unknown} pages
	 * @param {unknown} rootHeight
	 */
	splitInfoHr: RequiredParams<'pages' | 'rootHeight'>
}

export type TranslationFunctions = {
	/**
	 * Export as an image
	 */
	command: () => LocalizedString
	/**
	 * Please open an article first!
	 */
	noActiveFile: () => LocalizedString
	/**
	 * Image Export Preview
	 */
	imageExportPreview: () => LocalizedString
	/**
	 * Copied to clipboard
	 */
	copiedSuccess: () => LocalizedString
	/**
	 * Copy to Clipboard
	 */
	copy: () => LocalizedString
	/**
	 * Failed to copy
	 */
	copyFail: () => LocalizedString
	/**
	 * Unable to directly copy {format} format
	 */
	notAllowCopy: (arg: { format: unknown }) => LocalizedString
	/**
	 * Save Image
	 */
	save: () => LocalizedString
	/**
	 * Export and save the image as {filePath}.
	 */
	saveSuccess: (arg: { filePath: string }) => LocalizedString
	/**
	 * Failed to save the image
	 */
	saveFail: () => LocalizedString
	/**
	 * Save to Vault
	 */
	saveVault: () => LocalizedString
	/**
	 * Including File Name As Title
	 */
	includingFilename: () => LocalizedString
	/**
	 * Image Width
	 */
	imageWidth: () => LocalizedString
	/**
	 * Font Size
	 */
	fontSize: () => LocalizedString
	/**
	 * Small
	 */
	fontSizeSmall: () => LocalizedString
	/**
	 * Medium
	 */
	fontSizeMedium: () => LocalizedString
	/**
	 * Large
	 */
	fontSizeLarge: () => LocalizedString
	/**
	 * Extra Large
	 */
	fontSizeExtraLarge: () => LocalizedString
	/**
	 * Export to image
	 */
	exportImage: () => LocalizedString
	/**
	 * Export selection to image
	 */
	exportSelectionImage: () => LocalizedString
	/**
	 * Export all notes to image
	 */
	exportFolder: () => LocalizedString
	/**
	 * Loading document content...
	 */
	loading: () => LocalizedString
	/**
	 * Please set width with a reasonable number.
	 */
	invalidWidth: () => LocalizedString
	/**
	 * Enable 2x resolution image
	 */
	resolutionMode: () => LocalizedString
	/**
	 * More detailed settings can be found in the `Export Image` plugin settings.
	 */
	moreSetting: () => LocalizedString
	/**
	 * Drag to Move, scroll or pinch to zoom in/out, double click to reset.
	 */
	guide: () => LocalizedString
	/**
	 * pdf format is not supported for copy
	 */
	copyNotAllowed: () => LocalizedString
	/**
	 * Export Selected Notes
	 */
	exportAll: () => LocalizedString
	/**
	 * No markdown files in the current directory
	 */
	noMarkdownFile: () => LocalizedString
	/**
	 * Select All
	 */
	selectAll: () => LocalizedString
	setting: {
		/**
		 * Export Image
		 */
		title: () => LocalizedString
		imageWidth: {
			/**
			 * Default exported image width
			 */
			label: () => LocalizedString
			/**
			 * Set the width of the exported image in pixel. The default is 640px.
			 */
			description: () => LocalizedString
		}
		padding: {
			/**
			 * Image Padding
			 */
			title: () => LocalizedString
			/**
			 * Set padding for the exported image. The default is 6px for all sides.
			 */
			description: () => LocalizedString
			/**
			 * Top padding
			 */
			top: () => LocalizedString
			/**
			 * Right padding
			 */
			right: () => LocalizedString
			/**
			 * Bottom padding
			 */
			bottom: () => LocalizedString
			/**
			 * Left padding
			 */
			left: () => LocalizedString
		}
		split: {
			/**
			 * Split Image
			 */
			title: () => LocalizedString
			mode: {
				/**
				 * Split mode
				 */
				label: () => LocalizedString
				/**
				 * Choose whether to split the image, and how to split. Fixed height means each split image has a fixed height, which may cut off text at the split point. Split by horizontal rule means split the image by the horizontal rule in the document. Auto split by paragraph means split the image by the paragraph, ensuring that a paragraph is not split into two images, and the height is as close as possible to the split height.
				 */
				description: () => LocalizedString
				/**
				 * No split
				 */
				none: () => LocalizedString
				/**
				 * Fixed height
				 */
				fixed: () => LocalizedString
				/**
				 * Split by horizontal rule
				 */
				hr: () => LocalizedString
				/**
				 * Auto split by paragraph
				 */
				auto: () => LocalizedString
			}
			height: {
				/**
				 * Split image height
				 */
				label: () => LocalizedString
				/**
				 * Set the height of each split image in pixels. The default is 1000px.
				 */
				description: () => LocalizedString
			}
			overlap: {
				/**
				 * Split image overlap
				 */
				label: () => LocalizedString
				/**
				 * Set the overlap between adjacent split images to prevent content from being cut off. The default is 40px.
				 */
				description: () => LocalizedString
			}
		}
		filename: {
			/**
			 * Include file name as title
			 */
			label: () => LocalizedString
			/**
			 * Set whether to include the file name as the title. When Obsidian displays the document, it will display the file name as an h1 title. Sometimes this is not what you want, and you will get duplicate titles.
			 */
			description: () => LocalizedString
		}
		resolutionMode: {
			/**
			 * Enable 2x resolution image
			 */
			label: () => LocalizedString
			/**
			 * Set whether to enable 2x resolution image. Images with 2x resolution will appear sharper and provide a better experience on high PPI screens, such as those on smartphones. However, the downside is that the file size of the images is larger.
			 */
			description: () => LocalizedString
		}
		metadata: {
			/**
			 * Show metadata
			 */
			label: () => LocalizedString
		}
		format: {
			/**
			 * Output file format
			 */
			title: () => LocalizedString
			/**
			 * Default PNG format images should satisfy the majority of needs, but to better support user scenarios: 1. Support for exporting images with both normal and transparent backgrounds; 2. Support for exporting JPG images to achieve smaller file sizes, though it may not be possible to copy directly to the clipboard; 3. Support for exporting to single-page PDF format, which differs from the usual PDF paper formats, please be careful not to misuse.
			 */
			description: () => LocalizedString
			/**
			 * .png - default
			 */
			png0: () => LocalizedString
			/**
			 * .png - transparent background image
			 */
			png1: () => LocalizedString
			/**
			 * .jpg - jpg format image
			 */
			jpg: () => LocalizedString
			/**
			 * .pdf - single page pdf
			 */
			pdf: () => LocalizedString
		}
		quickExportSelection: {
			/**
			 * Quick export selection
			 */
			label: () => LocalizedString
			/**
			 * Whether to skip the configuration process when exporting selected content, directly copying the exported image to the clipboard.
			 */
			description: () => LocalizedString
		}
		userInfo: {
			/**
			 * Author info
			 */
			title: () => LocalizedString
			/**
			 * Show author info
			 */
			show: () => LocalizedString
			avatar: {
				/**
				 * Avatar
				 */
				title: () => LocalizedString
				/**
				 * Recommend using square pictures
				 */
				description: () => LocalizedString
			}
			/**
			 * Author name
			 */
			name: () => LocalizedString
			/**
			 * Where to display
			 */
			position: () => LocalizedString
			/**
			 * Extra text
			 */
			remark: () => LocalizedString
			/**
			 * Align
			 */
			align: () => LocalizedString
			/**
			 * Remove avatar
			 */
			removeAvatar: () => LocalizedString
		}
		watermark: {
			/**
			 * Watermark
			 */
			title: () => LocalizedString
			enable: {
				/**
				 * Enable watermark
				 */
				label: () => LocalizedString
				/**
				 * Enable watermark, supportting text watermark and image watermark.
				 */
				description: () => LocalizedString
			}
			type: {
				/**
				 * Watermark type
				 */
				label: () => LocalizedString
				/**
				 * Set the type of watermark, text or image.
				 */
				description: () => LocalizedString
				/**
				 * Text
				 */
				text: () => LocalizedString
				/**
				 * Image
				 */
				image: () => LocalizedString
			}
			text: {
				/**
				 * Text content
				 */
				content: () => LocalizedString
				/**
				 * Watermark font size
				 */
				fontSize: () => LocalizedString
				/**
				 * Watermark text color
				 */
				color: () => LocalizedString
			}
			image: {
				src: {
					/**
					 * Image url
					 */
					label: () => LocalizedString
					/**
					 * Upload image
					 */
					upload: () => LocalizedString
					/**
					 * Select from vault
					 */
					select: () => LocalizedString
				}
			}
			/**
			 * Watermark opacity (0 is transparent, 1 is not transparent)
			 */
			opacity: () => LocalizedString
			/**
			 * Watermark rotation (in degrees)
			 */
			rotate: () => LocalizedString
			/**
			 * Watermark width
			 */
			width: () => LocalizedString
			/**
			 * Watermark height
			 */
			height: () => LocalizedString
			/**
			 * Watermark horizontal gap
			 */
			x: () => LocalizedString
			/**
			 * Watermark vertical gap
			 */
			y: () => LocalizedString
		}
		/**
		 * Watermark preview
		 */
		preview: () => LocalizedString
		/**
		 * Reset to default
		 */
		reset: () => LocalizedString
		/**
		 * Include notes from subdirectories
		 */
		recursive: () => LocalizedString
	}
	imageSelect: {
		/**
		 * Search
		 */
		search: () => LocalizedString
		/**
		 * Select
		 */
		select: () => LocalizedString
		/**
		 * Cancel
		 */
		cancel: () => LocalizedString
		/**
		 * No image found
		 */
		empty: () => LocalizedString
	}
	/**
	 * Confirm
	 */
	confirm: () => LocalizedString
	/**
	 * Cancel
	 */
	cancel: () => LocalizedString
	/**
	 * Enter URL
	 */
	imageUrl: () => LocalizedString
	/**
	 * The total height of the image is {rootHeight}px, and the split height is {splitHeight}px, so {pages} images will be generated
	 */
	splitInfo: (arg: { pages: unknown, rootHeight: unknown, splitHeight: unknown }) => LocalizedString
	/**
	 * The total height of the image is {rootHeight}px, and the image will be split by the horizontal rule, so {pages} images will be generated
	 */
	splitInfoHr: (arg: { pages: unknown, rootHeight: unknown }) => LocalizedString
}

export type Formatters = {}
