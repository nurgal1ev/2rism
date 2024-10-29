const picker = new easepick.create({
    element: "#datepicker",
    css: [
        "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
    ],
    zIndex: 10,
    grid: 2,
    calendars: 2,
    plugins: [
        "RangePlugin",
        "TimePlugin"
    ]
})
