// $(window).on('load', function() {
//     var sectionList = [
//         '#hi',
//         '#theatre-positions',
//         '#direction',
//         '#scenic-design',
//         '#coursework',
//         '#pablo',
//         '#gallery',
//         '#contact'
//     ];
//     var sectionScrollList = sectionList.map(function(section) {
//         return $(section).offset().top;
//     });
//     var sectionLinkList = sectionList.map(function(section) {
//         return section + '-link';
//     });
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         var wHeight = $(window).height();
//         var dHeight = $(document).height();
//         if (scroll + wHeight === dHeight) {
//             sectionList.forEach(function(section, i) {
//                 if (i === sectionList.length - 1) {
//                     $(sectionLinkList[i]).parent().addClass('activepostlink');
//                 } else {
//                     $(sectionLinkList[i]).parent().removeClass('activepostlink');
//                 }
//             });
//         } else if (scroll >= $(sectionList[0]).offset().top - 5) {
//             $('#sidebar').show(1000);
//             sectionList.forEach(function(section, i) {
//                 var currentSectionScroll = sectionScrollList[i];
//                 var nextSectionScroll = (i + 1 === sectionList.length) ? $('#footer').offset().top : sectionScrollList[i + 1];
//                 if (scroll >= currentSectionScroll - 5 && scroll < nextSectionScroll - 5) {
//                     $(sectionLinkList[i]).parent().addClass('activepostlink');
//                 } else {
//                     $(sectionLinkList[i]).parent().removeClass('activepostlink');
//                 }
//             });
//         } else {
//             $('#sidebar').hide(300);
//         }
//     });

//     $('#start').on('click', function() {
//         $('html, body').animate({
//             scrollTop: $(sectionList[0]).offset().top
//         }, 2000);
//     });
//     $('#backtotop').on('click', function() {
//         $('html, body').animate({
//             scrollTop: 0
//         }, 2000);
//     });
//     sectionLinkList.forEach(function(sectionLink, i) {
//         $(sectionLink).on('click', function() {
//             $('html, body').animate({
//                 scrollTop: $(sectionList[i]).offset().top
//             }, 2000);
//         });
//     });
// });

$(document).ready(function() {
    if (window.location.pathname === '/') {
        $('#aboutNavItem').addClass('navItemActive');
    } else if (window.location.pathname === '/projects/') {
        $('#projectsNavItem').addClass('navItemActive');
    } else if (window.location.pathname === '/reviews/') {
        $('#reviewsNavItem').addClass('navItemActive');
    }
});