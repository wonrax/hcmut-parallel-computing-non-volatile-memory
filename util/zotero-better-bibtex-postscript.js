if (Translator.BetterBibTeX) {
    if (reference.has.howpublished) {
        reference.remove("howpublished");
    }

    if (item.accessDate && ["misc", "webpage"].includes(item.itemType)) {
        reference.add({ name: 'note', value: "Truy cập lần cuối " + item.accessDate.replace(/\s*T?\d+:\d+:\d+.*/, '') });
    }
}