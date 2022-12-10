type SlugifyConfig = {
  separator?: string;
  prefix?: string;
  suffix?: string;
};

const defaultConfig = {
  separator: "-",
};

export default function slugify(subject: string, config?: SlugifyConfig) {
  const { separator, prefix, suffix } = { ...defaultConfig, ...config };

  subject = [
    { to: "a", from: "[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]" },
    { to: "c", from: "[ÇĆĈČ]" },
    { to: "d", from: "[ÐĎĐÞ]" },
    { to: "e", from: "[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]" },
    { to: "g", from: "[ĜĞĢǴ]" },
    { to: "h", from: "[ĤḦ]" },
    { to: "i", from: "[ÌÍÎÏĨĪĮİỈỊ]" },
    { to: "j", from: "[Ĵ]" },
    { to: "ij", from: "[Ĳ]" },
    { to: "k", from: "[Ķ]" },
    { to: "l", from: "[ĹĻĽŁ]" },
    { to: "m", from: "[Ḿ]" },
    { to: "n", from: "[ÑŃŅŇ]" },
    { to: "o", from: "[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]" },
    { to: "oe", from: "[Œ]" },
    { to: "p", from: "[ṕ]" },
    { to: "r", from: "[ŔŖŘ]" },
    { to: "s", from: "[ßŚŜŞŠ]" },
    { to: "t", from: "[ŢŤ]" },
    { to: "u", from: "[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]" },
    { to: "w", from: "[ẂŴẀẄ]" },
    { to: "x", from: "[ẍ]" },
    { to: "y", from: "[ÝŶŸỲỴỶỸ]" },
    { to: "z", from: "[ŹŻŽ]" },
    { to: "-", from: "[·/_,:;']" },
  ]
    .reduce((current, { from, to }) => current.replace(new RegExp(from, "gi"), to), subject)
    .toLowerCase()
    /* Replace spaces with - */
    .replace(/\s+/g, "-")
    /* Replace & with 'and' */
    .replace(/&/g, "-and-")
    /* Remove all non-word chars */
    .replace(/[^\w-]+/g, "")
    /* Replace multiple - with single - */
    .replace(/--+/g, "-")
    /* Trim - from start of text */
    .replace(/^-+/, "")
    /* Trim - from end of text */
    .replace(/-+$/, "");

  subject = separator === defaultConfig.separator ? subject : subject.replace(/-/g, separator);

  return [prefix, subject, suffix].filter(Boolean).join(separator);
}
