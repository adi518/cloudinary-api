export const SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};

export const ROTATION_MODES = {
  AUTO_RIGHT: 'auto_right',
  AUTO_LEFT: 'auto_left',
  VERTICAL_FLIP: 'vflip',
  HORIZONTAL_FLIP: 'hflip',
  IGNORE_EXIF_DATA: 'ignore'
}

export const IMAGE_CONDITIONAL_OPERATORS = {
  equal: "eq",
  notEqual: "ne",
  lessThan: "lt",
  greaterThan: "gt",
  lessOrEqual: "lte",
  greaterOrEqual: "gte",
  include: "in",
  notInclude: "nin"
}

export const IMAGE_CONDITIONAL_FIELDS = {
  width: 'w',
  initialWidth: 'iw',
  height: 'h',
  initialHeight: 'ih',
  aspectRatio: 'ar',
  intialAspectRatio: 'iar',
  context: 'ctx',
  metadata: 'md',
  tags: 'tags',
  trimmedAspectRatio: 'tar',
  currentPage: 'cp',
  faceCount: 'fc',
  pageCount: 'pc',
  pageXOffset: 'px',
  pageYOffset: 'py',
  initialDensity: 'idn',
  illustration: 'ils',
  pageNames: 'pgnames' // layers in TIFF 
}

export const STORAGE_TYPES = {
  UPLOAD: 'upload',
  FETCH: 'fetch',
  PRIVATE: 'private',
  AUTHENTICATED: 'authenticated',
  SPRITE: 'sprite',
  FACEBOOK: 'facebook',
  TWITTER: 'twitter',
  YOUTUBE: 'youtube',
  VIMEO: 'vimeo'
}

export const RESOURCE_TYPES = {
  IMAGE: 'image',
  VIDEO: 'video',
  RAW: 'raw'
}

export const DEFAULT_VIDEO_SOURCE_TYPES = {
  WEBM: 'webm', 
  MP4: 'mp4',
  OGV: 'ogv'
};

export const TRANSFORMERS = {
  angle: 'a',
  rotate: 'a',
  audioCodec: 'ac',
  audioFrequency: 'af',
  // aspectRatio: 'ar',
  background: 'b',
  bitRate: 'br',
  // border: 'bo', // Border: { width:, height:, type:, color: }
  color: 'co',
  colorSpace: 'cs',
  // crop: 'c', //resize: { width, height: , type}
  customFunction: 'fn',
  // customPreFunction: 'fn_pre:', //make sure it won't duplicate _
  defaultImage: 'd',
  delay: 'dl',
  density: 'dn',
  duration: 'du',
  dpr: 'dpr',
  // else: '',
  // endIf: '',
  endOffset: 'eo', //to remove
  // fallbackContent: '',
  format: 'f',
  // flags: 'fl',
  gravity: 'g',
  // fps: 'fps',
  // height: 'h',
  // htmlHeight: '',
  // htmlWidth: '',
  // if: '',
  keyframeInterval: 'ki',
  ocr: 'ocr',
  // offset: '',
  opacity: 'o',
  overlay: 'l',
  page: 'pg',
  // poster: '',
  prefix: 'p',
  quality: 'q',
  radius: 'r',
  // rawTransformation,
  // size,
  // sourceTypes,
  // sourceTransformation,
  startOffset: 'so',
  streamingProfile: 'sp',
  transformation: 't',
  underlay: 'u',
  // variable,
  // variables,
  videoCodec: 'vc',
  videoSampling: 'vs',
  // width: 'w',
  // x: 'x',
  // y: 'y',
  zoom: 'z'
}
