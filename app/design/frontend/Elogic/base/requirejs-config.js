var config = {
    deps: [
        'js/theme'
    ],
    paths: {
        slick: 'js/slick',
        'elogicCoarousel': 'Elogic_CatalogWidget/js/carousels',
        'elogicFirstSlider': 'js/firstDisplaySlider',
        'elogicTripleSlider': 'js/triple-slider',
        'elogicNewsBlogSlider': 'js/news-blog-slider',
        'elogicBrandsSlider': 'js/brands-slider',
        'elogicModalSubscription': 'js/modal-subscription'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }
};
