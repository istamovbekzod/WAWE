function forms(){$("input,textarea").focus((function(){$(this).val()==$(this).attr("data-value")&&($(this).addClass("focus"),$(this).parent().addClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","password"),$(this).val("")),removeError($(this))})),$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||(this.value=$(this).attr("data-value"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form__label").length&&$(this).parent().append('<div class="form__label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&(this.value=$(this).attr("data-value"),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text"))}))})),$(".form-input__viewpass").click((function(t){$(this).hasClass("active")?$(this).parent().find("input").attr("type","password"):$(this).parent().find("input").attr("type","text"),$(this).toggleClass("active")})),$.each($("input.phone"),(function(t,a){$(this).attr("type","tel"),$(this).focus((function(){$(this).inputmask("+7(999) 999 9999",{clearIncomplete:!0,clearMaskOnLostFocus:!0,onincomplete:function(){maskclear($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.phone").focusout((function(t){maskclear($(this))})),$.each($("input.num"),(function(t,a){$(this).focus((function(){$(this).inputmask("9{1,1000}",{clearIncomplete:!0,placeholder:"",clearMaskOnLostFocus:!0,onincomplete:function(){maskclear($(this))}}),$(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).parent().removeClass("err"),$(this).removeClass("err")}))})),$("input.num").focusout((function(t){maskclear($(this))})),$.each($(".check"),(function(t,a){1==$(this).find("input").prop("checked")&&$(this).addClass("active")})),$("body").off("click",".check",(function(t){})),$("body").on("click",".check",(function(t){$(this).hasClass("disable")||($(t.target).is("a")||($(this).toggleClass("active"),$(this).hasClass("active")?$(this).find("input").prop("checked",!0):$(this).find("input").prop("checked",!1)))}))}function formValidate(t){var a=0,e=t.parents("form");if("email"==t.attr("name")||t.hasClass("email")){if(t.val()!=t.attr("data-value")){var s=t.val().replace(" ","");t.val(s)}/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(t.val())&&t.val()!=t.attr("data-value")?removeError(t):(a++,addError(t))}else""==t.val()||t.val()==t.attr("data-value")?(a++,addError(t)):removeError(t);return"checkbox"==t.attr("type")&&(1==t.prop("checked")?t.removeClass("err").parent().removeClass("err"):(a++,t.addClass("err").parent().addClass("err"))),t.hasClass("name")&&(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(t.val())||(a++,addError(t))),t.hasClass("pass-2")&&(e.find(".pass-1").val()!=e.find(".pass-2").val()?addError(t):removeError(t)),a}function clearForm(t){$.each(t.find(".input"),(function(t,a){$(this).removeClass("focus").val($(this).data("value")),$(this).parent().removeClass("focus"),$(this).hasClass("phone")&&maskclear($(this))}))}function addError(t){if(t.addClass("err"),t.parent().addClass("err"),t.parent().find(".form__error").remove(),t.hasClass("email")){var a="";null!=(a=(""==t.val()||(t.val(),t.attr("data-value")),t.data("error")))&&t.parent().append('<div class="form__error">'+a+"</div>")}else null!=t.data("error")&&0==t.parent().find(".form__error").length&&t.parent().append('<div class="form__error">'+t.data("error")+"</div>")}function addErrorByName(t,a,e){var s=t.find('[name="'+a+'"]');s.attr("data-error",e),addError(s)}function removeError(t){t.removeClass("err"),t.parent().removeClass("err"),t.parent().find(".form__error").remove()}function removeFormErrors(t){t.find(".err").removeClass("err"),t.find(".form__error").remove()}function maskclear(t){""==t.val()&&(t.inputmask("remove"),t.val(t.attr("data-value")),t.removeClass("focus"),t.parent().removeClass("focus"))}$(".mainslider").length>0&&$(".mainslider").slick({infinite:!1,dots:!0,arrows:!1,accessibility:!1,slidesToShow:1,autoplaySpeed:3e3,responsive:[{breakpoint:768,settings:{}}]}),forms(),$("form button[type=submit]").click((function(){var t=0,a=$(this).parents("form"),e=a.data("ms");return $.each(a.find(".req"),(function(a,e){t+=formValidate($(this))})),0==t&&(removeFormError(a),null!=e&&""!=e?(showMessageByClass(e),!1):void 0)}));let iconMenu=document.querySelector(".icon-menu"),body=document.querySelector("body"),menuBody=document.querySelector(".menu__body");function ibg(){if(isIE()){let a=document.querySelectorAll(".ibg");for(var t=0;t<a.length;t++)a[t].querySelector("img")&&null!=a[t].querySelector("img").getAttribute("src")&&(a[t].style.backgroundImage="url("+a[t].querySelector("img").getAttribute("src")+")")}}iconMenu&&iconMenu.addEventListener("click",(function(){iconMenu.classList.toggle("active"),body.classList.toggle("lock"),menuBody.classList.toggle("active")})),$(".gallery").length>0&&baguetteBox.run(".gallery",{}),$(".filter__item").click((function(t){var a=$(this).data("filter");return 1==a?$(".block-gallery__column").show():($(".block-gallery__column").hide(),$(".block-gallery__column.f_"+a).show()),$(".filter__item").removeClass("active"),$(this).addClass("active"),!1})),ibg();