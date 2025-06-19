
$(function () {
    'use strict';

    /*--------------------------------------------------------------
        Team section animation
    --------------------------------------------------------------*/
    $('#left-1, #right-1, #left-2, #right-2').css({
        'opacity': 0
    });

    $('#left-1').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function () {
            $('#left-1').addClass('fadeInLeft');
            $('#right-1').addClass('fadeInRight');
        });
    });


    $('#left-2').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function () {
            $('#left-2').addClass('fadeInLeft');
            $('#right-2').addClass('fadeInRight');
        });
    });



    /*--------------------------------------------------------------
        About team section animation
    --------------------------------------------------------------*/
    $('#right').css({
        'opacity': 0
    });

    $('#right').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function () {
            $('#right').addClass('fadeInRight');
        });
    });



    /*--------------------------------------------------------------
        Tema skill progress bar setting
    --------------------------------------------------------------*/
    $('.team-skill').each(function () {
        var $this = $(this);
        var myVal = $(this).data("value");

        $this.appear(function () {
            function progress(percent, $element) {
                var progressBarWidth = percent * $element.width() / 100;
                $element.find('div').animate({ width: progressBarWidth }, 500).html(percent + "% ");
            }

            progress(95, $('#rheumatoid-arthritis'));
            progress(90, $('#carpal-tunnel-syndrome'));
            progress(85, $('#osteoporosis'));
            progress(93, $('#fibromyalgia'));
            progress(88, $('#angina'));
            progress(92, $('#heart-attack'));
            progress(89, $('#stroke'));
            progress(91, $('#cardiac-arrhythmia'));
            progress(87, $('#high-cholesterol'));
            progress(86, $('#blood-pressure'));
            progress(90, $('#diabetes'));
            progress(88, $('#hypothyroidism'));
            progress(85, $('#emphysema'));
            progress(84, $('#insomnia'));
            progress(86, $('#add-adhd'));
            progress(89, $('#alzheimers'));
            progress(87, $('#parkinsons'));
            progress(85, $('#lupus'));
            progress(82, $('#cold-flu'));
            progress(94, $('#cancer'));
            progress(80, $('#kidney-failure'));
            progress(79, $('#cirrhosis-liver'));
            progress(81, $('#cysts'));
            progress(83, $('#tumors'));
            progress(90, $('#acne'));
            progress(85, $('#epstein-barr'));



            progress(90, $('#cellulite'));
            progress(88, $('#obesity'));
            progress(85, $('#headaches'));
            progress(87, $('#anxiety'));
            progress(89, $('#stress'));
            progress(86, $('#depression'));
            progress(84, $('#epilepsy'));
            progress(83, $('#multiple-sclerosis'));
            progress(85, $('#allergies'));
            progress(82, $('#chronic-fatigue'));
            progress(80, $('#ibs'));
            progress(81, $('#constipation'));
            progress(80, $('#diarrhoea'));
            progress(78, $('#septicemia'));
            progress(88, $('#ageing'));
            progress(84, $('#irritability'));
            progress(83, $('#mood-swings'));
            progress(86, $('#infection'));
            progress(85, $('#herpes'));
            progress(82, $('#bronchial-problems'));
            progress(81, $('#lyme-disease'));
            progress(79, $('#fever-blisters'));
            progress(80, $('#shingles'));
            progress(77, $('#gangrene'));
            progress(83, $('#gastro'));


            progress(90, $('#blood-circulation'));
            progress(85, $('#asthma'));
            progress(88, $('#memory'));
            progress(92, $('#immune-system'));
            progress(87, $('#vitamin-absorption'));
            progress(86, $('#mineral-absorption'));
            progress(89, $('#damaged-tissue'));
            progress(85, $('#amino-acid-utilisation'));
            progress(88, $('#cellular-respiration'));
            progress(91, $('#oxygen-levels'));
            progress(87, $('#arterial-walls'));
            progress(90, $('#brain-function'));
            progress(89, $('#white-blood-cells'));
            progress(86, $('#concentration'));
            progress(88, $('#productivity'));
            progress(90, $('#skin'));
            progress(92, $('#healing'));
            progress(85, $('#alertness'));

            progress(95, $('#bacteria'));
            progress(96, $('#viruses'));
            progress(94, $('#anaerobic-microorganisms'));
            progress(93, $('#parasites'));
            progress(92, $('#candida'));
            progress(91, $('#germs'));


            progress(88, $('#lactic-acid'));
            progress(90, $('#toxins-in-body'));
            progress(89, $('#impurities-in-body'));
            progress(87, $('#carbon-monoxide'));
            progress(85, $('#chronic-hostility'));
            progress(86, $('#calm-nerves'));
            progress(84, $('#stomach-acid'));


            progress(90, $('#inflammation'));
            progress(88, $('#cholesterol'));
            progress(85, $('#fatty-deposits'));
            progress(83, $('#heartburn'));
            progress(87, $('#swelling'));
            progress(86, $('#pain'));
            progress(84, $('#plaque-in-arteries'));
            progress(88, $('#excess-sugar'));
            progress(82, $('#mucus'));
            progress(85, $('#tension'));
            progress(80, $('#blackheads'));
            progress(81, $('#scars'));
            progress(90, $('#hormones'));
            progress(89, $('#metabolism'));
            progress(95, $('#every-cell'));
            progress(92, $('#lymph-system'));
            progress(93, $('#liver'));
            progress(91, $('#kidney'));

        });
    });

}); //end of document.ready
