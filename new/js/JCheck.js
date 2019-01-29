;(function($){'use strict';$.fn.jRadio=function(settings){var _defaults={checkedClass:"z-checked",onChange:function(element){}};var options=$.extend(_defaults,settings||{});var radios=this;radios.each(function(){var $radio=$(this);var _name=$(this).data("name");if($radio.find('input[type="radio"]').is(':checked')){var $otherRadios=radios.filter("[data-name='"+_name+"']").not($radio);$radio.addClass(options.checkedClass);$otherRadios.removeClass(options.checkedClass);$otherRadios.find('input[type="radio"]').prop('checked',false);}
$radio.on("change",function(){if(!$(this).hasClass(options.checkedClass)){$(this).addClass(options.checkedClass);radios.filter("[data-name='"+_name+"']").not($(this)).removeClass(options.checkedClass);options.onChange($(this));}});});};$.fn.jCheckbox=function(settings){var _defaults={checkedClass:"z-checked",onChange:function(element){}};var options=$.extend(_defaults,settings||{});var checkboxes=this;checkboxes.each(function(){var $checkbox=$(this);if($checkbox.find('input[type="checkbox"]').is(':checked')){$checkbox.addClass(options.checkedClass);}else{$checkbox.removeClass(options.checkedClass);}
$checkbox.on("change",function(){$(this).toggleClass(options.checkedClass);options.onChange($(this));});});};})(jQuery);