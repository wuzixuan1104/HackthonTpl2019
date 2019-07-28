/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2019, Ginkgo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function() {
  $('.tab > a').click(function() {
    console.log($(this).data('tab'));
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab-block').removeClass('active');
    $('.' + $(this).data('tab')).addClass('active');
  });
  $('.scene-block > .box').click(function() {
    $('.location').toggleClass('active');
  });

  $('.header-location-block > h1').click(function() {
    $('.location').toggleClass('active');
  });

  setTimeout(function() {
    $('.loading').removeClass('active');
  }, 1000);
});