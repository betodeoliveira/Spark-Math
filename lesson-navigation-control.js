// Waits for Cms PrevNext to load
window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
    'cmsprevnext',
    (listInstances) => {
        // When it loads check to disable the button or not
        $(".lesson_navigatin-btn").each(function (index) {
            if ($(this).children().length <= 1) {
                $(this).css("opacity", "0");
            }
        });
    },
]);