
const nav = ($link, $menu, $links, $backdrop) => {
    const $body = document.querySelector('body');
    const classes = {
        slideIn: 'slide-in',
        slideOut: 'slide-out',
        hidden: 'hidden',
        block: 'block',
        overflowAuto: 'overflow-auto',
        overflowHidden: 'overflow-hidden',
    };

    $menu.classList.add(classes.slideOut);
    $backdrop.classList.add('hidden');
    $body.classList.add('overflow-auto');

    $link.addEventListener("click", (event) => {
        event.stopPropagation();
        if ($menu.classList.contains(classes.slideOut)) {
            $menu.classList.replace(classes.slideOut, classes.slideIn);
            $body.classList.replace(classes.overflowAuto, classes.overflowHidden);
            $backdrop.classList.replace(classes.hidden, classes.block);

        } else {
            $menu.classList.replace(classes.slideIn, classes.slideOut);
            $backdrop.classList.replace(classes.block, classes.hidden);
            $body.classList.replace(classes.overflowHidden, classes.overflowAuto);
        }
    });

    $backdrop.addEventListener("click", (event) => {
        event.stopPropagation();
        $menu.classList.replace(classes.slideIn, classes.slideOut);
        $backdrop.classList.replace(classes.block, classes.hidden);
        $body.classList.replace(classes.overflowHidden, classes.overflowAuto);
    });

    $links.forEach($link => {
        $link.addEventListener("click", (event) => {
            $menu.classList.replace(classes.slideIn, classes.slideOut);
            $backdrop.classList.replace(classes.block, classes.hidden);
            $body.classList.replace(classes.overflowHidden, classes.overflowAuto);
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    nav(
        document.querySelector("#dd-link"), 
        document.querySelector("#dd-menu"),  
        document.querySelectorAll("#dd-menu a"),  
        document.querySelector("#dd-backdrop")
    );
});