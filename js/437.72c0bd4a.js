"use strict";(self["webpackChunknotes_app"]=self["webpackChunknotes_app"]||[]).push([[437],{6437:function(C,a,t){t.r(a),t.d(a,{default:function(){return F}});var l=t(6768);const p={class:"auth-container"},h={class:"login-modal"},i={class:"inputs"},L={class:"buttons"},e={class:"_text-small"},s={class:"login-modal"},d={class:"inputs"},o={class:"buttons"},f={class:"_text-small"};function M(C,a,t,M,r,n){const Z=(0,l.g2)("base-input"),H=(0,l.g2)("base-button"),u=(0,l.g2)("base-modal"),c=(0,l.g2)("the-header");return(0,l.uX)(),(0,l.CE)("section",p,[C.modalIsOpen&&!C.isRegistering?((0,l.uX)(),(0,l.Wv)(u,{key:0,onClose:a[3]||(a[3]=a=>(C.toggleModal(!1),C.setRegistrationModal(!1)))},{default:(0,l.k6)((()=>[(0,l.Lk)("div",h,[a[12]||(a[12]=(0,l.Lk)("h2",null,"Вход в ваш аккаунт",-1)),(0,l.Lk)("div",i,[(0,l.bF)(Z,{value:C.user.email,"onUpdate:modelValue":a[0]||(a[0]=a=>C.user.email=a),label:"Email",placeholder:"Введите значение"},null,8,["value"]),(0,l.bF)(Z,{value:C.user.password,"onUpdate:modelValue":a[1]||(a[1]=a=>C.user.password=a),label:"Пароль",placeholder:"Введите пароль",type:"password"},null,8,["value"])]),(0,l.Lk)("div",L,[(0,l.Lk)("p",e,[a[10]||(a[10]=(0,l.eW)(" У вас нет аккаунта? ")),(0,l.Lk)("span",{onClick:a[2]||(a[2]=a=>C.setRegistrationModal(!0)),class:"_green _pointer _bold"}," Зарегистрируйтесь ")]),(0,l.bF)(H,{onClick:C.auth,disabled:C.isLoginButtonDisabled},{default:(0,l.k6)((()=>a[11]||(a[11]=[(0,l.eW)(" Войти ")]))),_:1},8,["onClick","disabled"])])])])),_:1})):(0,l.Q3)("",!0),C.modalIsOpen&&C.isRegistering?((0,l.uX)(),(0,l.Wv)(u,{key:1,onClose:a[8]||(a[8]=a=>(C.toggleModal(!1),C.setRegistrationModal(!1)))},{default:(0,l.k6)((()=>[(0,l.Lk)("div",s,[a[15]||(a[15]=(0,l.Lk)("h2",null,"Регистрация",-1)),(0,l.Lk)("div",d,[(0,l.bF)(Z,{value:C.user.email,"onUpdate:modelValue":a[4]||(a[4]=a=>C.user.email=a),label:"Email",placeholder:"Введите значение"},null,8,["value"]),(0,l.bF)(Z,{value:C.user.password,"onUpdate:modelValue":a[5]||(a[5]=a=>C.user.password=a),label:"Пароль",placeholder:"Введите пароль",type:"password"},null,8,["value"]),(0,l.bF)(Z,{value:C.user.confirm_password,"onUpdate:modelValue":a[6]||(a[6]=a=>C.user.confirm_password=a),label:"Пароль еще раз",placeholder:"Введите пароль",type:"password"},null,8,["value"])]),(0,l.Lk)("div",o,[(0,l.Lk)("p",f,[a[13]||(a[13]=(0,l.eW)(" У вас нет аккаунта? ")),(0,l.Lk)("span",{onClick:a[7]||(a[7]=a=>C.setRegistrationModal(!1)),class:"_green _pointer _bold"}," Войдите ")]),(0,l.bF)(H,{onClick:C.register,disabled:C.isLoginButtonDisabled},{default:(0,l.k6)((()=>a[14]||(a[14]=[(0,l.eW)(" Зарегистрироваться ")]))),_:1},8,["onClick","disabled"])])])])),_:1})):(0,l.Q3)("",!0),(0,l.bF)(c,{onLogin:a[9]||(a[9]=a=>C.toggleModal(!0))}),a[16]||(a[16]=(0,l.Fv)('<main class="auth-main"><div class="auth-text"><h1> Мои заметки </h1><h3> Не забывай о важном, храни его в облаке. </h3></div><svg xmlns="http://www.w3.org/2000/svg" width="898" height="864" viewBox="0 0 898 864" fill="none"><path d="M842.089 322.441C844.378 309.314 848.055 296.31 850.685 282.939C855.701 257.344 855.531 230.555 851.781 204.764C844.427 154.425 823.241 106.57 794.167 67.5553C762.097 24.498 713.858 -10.3034 661.966 2.79887C608.005 16.4369 562.323 58.0574 509.847 77.0533C420.967 109.2 330.991 50.6052 241.405 52.5535C164.091 54.2339 82.9302 81.9971 31.9885 150.65C11.1443 178.73 -3.32009 216.551 1.59876 253.569C7.6134 298.794 40.7791 333.205 65.5438 366.667C103.482 417.956 117.825 473.702 85.9254 533.661C64.3506 574.234 35.3245 610.083 37.8327 660.47C41.8505 741.081 116.266 789.764 177.63 811.488C239.944 833.552 310.756 835.939 372.728 811.001C427.785 788.839 466.211 740.302 516.252 709.446C561.301 681.658 612.656 670.991 663.598 677.104C716.634 683.46 772.519 694.59 823.777 671.746C872.82 649.877 896.05 591.257 897.876 535.122C898.777 507.115 894.76 478.743 885.458 452.685C874.086 420.879 848.907 396.087 841.845 362.332C838.948 348.548 839.849 335.422 842.089 322.441Z" fill="#1B2F46"></path><g clip-path="url(#clip0_3_168)"><path d="M779.361 150.146H121.03C113.699 150.146 107.756 156.093 107.756 163.428V661.453C107.756 668.788 113.699 674.735 121.03 674.735H779.361C786.691 674.735 792.634 668.788 792.634 661.453V163.428C792.634 156.093 786.691 150.146 779.361 150.146Z" fill="#92A4B9"></path><path d="M776.281 164.525H124.109V647.375H776.281V164.525Z" fill="white"></path><path opacity="0.6" d="M776.706 638.504H776.281V173.38V164.525H124.109V173.38H767.432V638.504H124.534V647.358H767.432H776.281H776.706V638.504Z" fill="#E0E0E0"></path><path d="M289.143 190.486H283.25V607.213H289.143V190.486Z" fill="#E0E0E0"></path><path d="M729.24 221.776H598.434V190.486H592.027V221.776H392.588V190.486H386.164V221.776H289.656V190.486H283.25V221.776H200.352V190.486H194.459V221.776H158.178V227.673H194.459V607.231H200.352V227.673H283.25V607.231H289.656V227.673H386.164V607.231H392.588V227.673H592.027V607.231H598.434V227.673H729.24V221.776Z" fill="#C2DBF6"></path><path opacity="0.7" d="M524.898 265.073L517.465 318.711L577.338 319.437L572.276 250.906L524.898 265.073Z" fill="#CCCCCC"></path><path d="M572.258 250.906H513.802V312.956H572.258V250.906Z" fill="#DE4E96"></path><path d="M556.383 246.568H531.305V255.422H556.383V246.568Z" fill="#CCCCCC"></path><path d="M276.754 202.811C276.754 205.13 274.878 207.025 272.542 207.025H210.635C208.316 207.025 206.44 205.148 206.44 202.811C206.44 200.491 208.316 198.596 210.635 198.596H272.56C274.878 198.596 276.772 200.473 276.772 202.811H276.754Z" fill="#C2DBF6"></path><path d="M372.324 202.811C372.324 205.13 370.448 207.025 368.112 207.025H306.186C303.868 207.025 301.992 205.148 301.992 202.811C301.992 200.491 303.868 198.596 306.186 198.596H368.112C370.43 198.596 372.324 200.473 372.324 202.811Z" fill="#C2DBF6"></path><path d="M699.737 202.811C699.737 205.13 697.861 207.025 695.525 207.025H633.6C631.281 207.025 629.405 205.148 629.405 202.811C629.405 200.491 631.281 198.596 633.6 198.596H695.525C697.843 198.596 699.737 200.473 699.737 202.811Z" fill="#C2DBF6"></path><path d="M703.861 561.508C703.861 563.97 701.879 565.953 699.419 565.953H637.068C634.608 565.953 632.626 563.97 632.626 561.508C632.626 559.047 634.608 557.063 637.068 557.063H699.419C701.879 557.063 703.861 559.047 703.861 561.508Z" fill="#B1C909"></path><path d="M703.861 579.216C703.861 581.678 701.879 583.661 699.419 583.661H637.068C634.608 583.661 632.626 581.678 632.626 579.216C632.626 576.755 634.608 574.772 637.068 574.772H699.419C701.879 574.772 703.861 576.755 703.861 579.216Z" fill="#B1C909"></path><path d="M314.38 254.182L309.655 288.288L347.865 290.555V251.703L314.38 254.182Z" fill="#CCCCCC"></path><path d="M350.732 246.568H313.549V286.039H350.732V246.568Z" fill="#959CE4"></path><path opacity="0.7" d="M483.273 270.704H409.1V361.317H483.273V270.704Z" fill="#CCCCCC"></path><path d="M331.335 292.255L337.016 326.237L374.164 316.975L362.554 279.894L331.335 292.255Z" fill="#CCCCCC"></path><path d="M363.77 274.131L328.286 285.251L340.077 322.918L375.561 311.799L363.77 274.131Z" fill="#DE4E96"></path><path opacity="0.2" d="M455.15 263.709C455.15 269.624 450.478 274.423 444.709 274.423C438.939 274.423 434.267 269.624 434.267 263.709C434.267 257.795 438.939 252.996 444.709 252.996C450.478 252.996 455.15 257.795 455.15 263.709Z" fill="#666666"></path><path d="M412.958 400.098L405.525 453.736L465.61 457.295V396.22L412.958 400.098Z" fill="#CCCCCC"></path><path opacity="0.7" d="M513.731 420.692L518.509 474.632L577.851 464.627L564.17 405.092L513.731 420.692Z" fill="#CCCCCC"></path><path d="M566.765 396.179L509.798 409.297L523.706 469.766L580.673 456.648L566.765 396.179Z" fill="#FFBB2E"></path><path d="M474.919 378.317L446.178 424.216L499.537 452.089L524.544 396.361L474.919 378.317Z" fill="#CCCCCC"></path><path d="M470.123 388.145H411.667V450.194H470.123V388.145Z" fill="#959CE4"></path><path d="M644.236 471.48L640.909 504.24L677.473 505.072L676.146 467.973L644.236 471.48Z" fill="#CCCCCC"></path><path d="M678.733 462.927L643.219 464.217L644.587 501.911L680.101 500.62L678.733 462.927Z" fill="#959CE4"></path><path opacity="0.7" d="M669.456 500.043L666.111 532.786L702.693 533.618L701.348 496.519L669.456 500.043Z" fill="#EADBEA"></path><path d="M703.927 491.459L668.413 492.75L669.781 530.443L705.295 529.153L703.927 491.459Z" fill="#45C678"></path><path opacity="0.7" d="M329.388 392.412L309.478 430.308L353.776 446.918L368.395 394.608L329.388 392.412Z" fill="#CCCCCC"></path><path d="M324.951 378.912L308.302 425.03L351.763 440.737L368.412 394.62L324.951 378.912Z" fill="#B1C909"></path><path d="M339.123 380.391L336.748 386.97L355.391 393.708L357.766 387.129L339.123 380.391Z" fill="#666666"></path><path opacity="0.7" d="M496.528 584.104L447.576 610.312L420.339 548.599L469.787 525.862L496.528 584.104Z" fill="#CCCCCC"></path><path d="M471.461 521.621L422.007 544.349L450.078 605.498L499.532 582.77L471.461 521.621Z" fill="#B1C909"></path><path d="M431.215 533.381L419.549 556.589L426.822 560.249L438.488 537.041L431.215 533.381Z" fill="#FFDA8E"></path><path d="M495.351 568.144L484.758 589.216L492.031 592.876L502.624 571.804L495.351 568.144Z" fill="#FFDA8E"></path><path opacity="0.7" d="M517.483 379.238C517.483 385.152 512.811 389.951 507.041 389.951C501.272 389.951 496.599 385.152 496.599 379.238C496.599 373.323 501.272 368.524 507.041 368.524C512.811 368.524 517.483 373.323 517.483 379.238Z" fill="#CCCCCC"></path><path opacity="0.7" d="M346.272 521.399L339.388 499.423L308.168 511.801L313.85 545.766L334.503 540.613L330.592 554.035L368.059 561.845L373.722 523.418L346.272 521.399Z" fill="#CCCCCC"></path><path opacity="0.7" d="M315.867 552.512L306.222 585.574L343.688 593.401L349.352 554.956L315.867 552.512Z" fill="#CCCCCC"></path><path d="M453.522 297.727C452.761 297.107 451.646 297.213 451.027 297.975L440.904 310.317L430.922 297.195C430.338 296.416 429.223 296.275 428.444 296.859C427.665 297.443 427.524 298.559 428.108 299.338L438.603 313.133L427.612 326.52C426.993 327.282 427.099 328.397 427.86 329.017C428.196 329.283 428.586 329.424 428.975 329.424C429.488 329.424 430.002 329.212 430.338 328.769L440.78 316.037L450.425 328.734C450.779 329.194 451.31 329.424 451.841 329.424C452.213 329.424 452.584 329.3 452.903 329.07C453.682 328.486 453.823 327.37 453.239 326.591L443.08 313.239L453.735 300.259C454.354 299.497 454.248 298.382 453.487 297.762L453.522 297.727Z" fill="#010202"></path><path opacity="0.7" d="M238.704 431.494L223.784 462.555L259.481 476.367L271.339 439.375L238.704 431.494Z" fill="#CCCCCC"></path><path d="M240.234 424.016L228.195 461.605L263.604 472.959L275.644 435.371L240.234 424.016Z" fill="#66C2F0"></path><path opacity="0.7" d="M241.606 530.218C244.509 533.175 244.526 537.868 241.642 540.701C238.757 543.534 234.067 543.41 231.164 540.453C228.262 537.496 228.244 532.803 231.129 529.97C234.014 527.137 238.704 527.261 241.606 530.218Z" fill="#CCCCCC"></path><path opacity="0.7" d="M666.712 340.727L627.935 415.198L688.158 446.593L726.936 372.122L666.712 340.727Z" fill="#CCCCCC"></path><path opacity="0.7" d="M681.225 273.218L685.101 316.975L733.24 308.865L722.143 260.575L681.225 273.218Z" fill="#CCCCCC"></path><path d="M724.252 253.321L678.029 263.965L689.314 313.027L735.536 302.383L724.252 253.321Z" fill="#FFBB2E"></path><path opacity="0.7" d="M634.573 245.541L608.575 287.084L656.855 312.3L679.491 261.885L634.573 245.541Z" fill="#CCCCCC"></path><path opacity="0.2" d="M714.214 491.809C714.214 497.174 709.984 501.513 704.763 501.513C699.542 501.513 695.313 497.174 695.313 491.809C695.313 486.443 699.542 482.105 704.763 482.105C709.984 482.105 714.214 486.443 714.214 491.809Z" fill="#666666"></path><path d="M713.506 491.207C713.506 496.572 709.17 500.911 703.808 500.911C698.445 500.911 694.109 496.572 694.109 491.207C694.109 485.841 698.445 481.503 703.808 481.503C709.17 481.503 713.506 485.841 713.506 491.207Z" fill="#949494"></path><path d="M712.904 491.207C712.904 496.572 708.568 500.911 703.206 500.911C697.843 500.911 693.507 496.572 693.507 491.207C693.507 485.841 697.843 481.503 703.206 481.503C708.568 481.503 712.904 485.841 712.904 491.207Z" fill="#CCCCCC"></path><path d="M497.183 533.458C497.183 533.458 497.13 533.458 497.113 533.458C497.077 533.458 497.059 533.494 497.024 533.512C496.971 533.529 496.918 533.565 496.882 533.582C496.847 533.618 496.812 533.636 496.759 533.671C496.723 533.706 496.67 533.742 496.635 533.795C496.599 533.83 496.564 533.883 496.528 533.919C496.528 533.937 496.493 533.954 496.475 533.972C496.475 533.99 496.475 534.025 496.44 534.061C496.422 534.114 496.405 534.149 496.387 534.202C496.369 534.255 496.351 534.308 496.334 534.379C496.334 534.432 496.316 534.486 496.316 534.539C496.316 534.592 496.316 534.627 496.316 534.68C496.316 534.716 496.316 534.751 496.316 534.787C496.316 534.804 496.334 534.822 496.334 534.857C496.334 534.911 496.351 534.964 496.369 534.999C496.369 535.017 496.369 535.052 496.369 535.07L501.572 548.546C501.82 549.183 502.546 549.52 503.183 549.254C503.785 549.024 504.103 548.386 503.944 547.784C503.944 547.731 503.909 547.678 503.891 547.625L499.997 537.567L531.535 556.603C532.119 556.957 532.898 556.762 533.252 556.178C533.429 555.877 533.464 555.541 533.393 555.24C533.323 554.921 533.128 554.655 532.827 554.46L501.218 535.389L510.085 534.238C510.775 534.149 511.253 533.529 511.165 532.839C511.165 532.786 511.165 532.75 511.129 532.697C510.97 532.095 510.386 531.67 509.749 531.758L497.325 533.37C497.325 533.37 497.289 533.388 497.254 533.388C497.201 533.388 497.166 533.405 497.113 533.423L497.183 533.458Z" fill="#666666"></path><path d="M264.932 277.628C264.932 277.628 264.985 277.628 265.003 277.628C265.038 277.628 265.056 277.592 265.091 277.575C265.145 277.557 265.198 277.539 265.233 277.504C265.268 277.468 265.322 277.451 265.357 277.415C265.41 277.38 265.445 277.344 265.481 277.309C265.516 277.274 265.552 277.221 265.587 277.185C265.587 277.167 265.622 277.15 265.64 277.132C265.64 277.114 265.64 277.079 265.676 277.043C265.693 277.008 265.711 276.955 265.746 276.902C265.764 276.849 265.782 276.796 265.799 276.725C265.799 276.672 265.817 276.618 265.835 276.565C265.835 276.512 265.835 276.459 265.835 276.424C265.835 276.388 265.835 276.353 265.835 276.317C265.835 276.3 265.835 276.282 265.817 276.247C265.817 276.193 265.799 276.14 265.782 276.105C265.782 276.087 265.782 276.052 265.782 276.034L260.968 262.416C260.738 261.761 260.03 261.425 259.375 261.655C258.773 261.868 258.437 262.487 258.561 263.107C258.561 263.16 258.579 263.213 258.596 263.266L262.189 273.431L231.217 253.492C230.633 253.12 229.855 253.279 229.483 253.863C229.288 254.147 229.253 254.501 229.306 254.802C229.377 255.121 229.554 255.404 229.855 255.581L260.897 275.574L251.995 276.459C251.305 276.53 250.809 277.15 250.88 277.823C250.88 277.876 250.88 277.911 250.898 277.964C251.039 278.584 251.606 279.009 252.243 278.938L264.72 277.699C264.72 277.699 264.755 277.699 264.791 277.681C264.844 277.681 264.897 277.663 264.932 277.646V277.628Z" fill="#666666"></path><g opacity="0.7"><path d="M476.512 476.172C476.512 478.634 474.53 480.617 472.07 480.617H409.72C407.26 480.617 405.277 478.634 405.277 476.172C405.277 473.711 407.26 471.728 409.72 471.728H472.07C474.53 471.728 476.512 473.711 476.512 476.172Z" fill="#CCCCCC"></path><path d="M476.512 493.881C476.512 496.342 474.53 498.325 472.07 498.325H409.72C407.26 498.325 405.277 496.342 405.277 493.881C405.277 491.419 407.26 489.436 409.72 489.436H472.07C474.53 489.436 476.512 491.419 476.512 493.881Z" fill="#CCCCCC"></path><path d="M271.303 304.969C271.303 307.023 269.64 308.67 267.605 308.67H215.572C213.519 308.67 211.874 307.006 211.874 304.969C211.874 302.915 213.537 301.268 215.572 301.268H267.605C269.658 301.268 271.303 302.933 271.303 304.969Z" fill="#CCCCCC"></path><path d="M271.303 319.738C271.303 321.792 269.64 323.439 267.605 323.439H215.572C213.519 323.439 211.874 321.774 211.874 319.738C211.874 317.684 213.537 316.037 215.572 316.037H267.605C269.658 316.037 271.303 317.701 271.303 319.738Z" fill="#CCCCCC"></path><path d="M580.842 336.508C580.842 338.969 578.86 340.952 576.4 340.952H514.05C511.589 340.952 509.607 338.969 509.607 336.508C509.607 334.046 511.589 332.063 514.05 332.063H576.4C578.86 332.063 580.842 334.046 580.842 336.508Z" fill="#CCCCCC"></path><path d="M580.842 354.216C580.842 356.677 578.86 358.661 576.4 358.661H514.05C511.589 358.661 509.607 356.677 509.607 354.216C509.607 351.754 511.589 349.771 514.05 349.771H576.4C578.86 349.771 580.842 351.754 580.842 354.216Z" fill="#CCCCCC"></path><path d="M366.466 464.662C366.466 466.716 364.802 468.363 362.767 468.363H310.735C308.682 468.363 307.036 466.698 307.036 464.662C307.036 462.608 308.699 460.961 310.735 460.961H362.767C364.82 460.961 366.466 462.626 366.466 464.662Z" fill="#CCCCCC"></path><path d="M366.466 479.431C366.466 481.485 364.802 483.132 362.767 483.132H310.735C308.682 483.132 307.036 481.467 307.036 479.431C307.036 477.377 308.699 475.73 310.735 475.73H362.767C364.82 475.73 366.466 477.394 366.466 479.431Z" fill="#CCCCCC"></path><path d="M366.466 343.52C366.466 345.574 364.802 347.221 362.767 347.221H310.735C308.682 347.221 307.036 345.557 307.036 343.52C307.036 341.466 308.699 339.819 310.735 339.819H362.767C364.82 339.819 366.466 341.484 366.466 343.52Z" fill="#CCCCCC"></path><path d="M366.466 358.289C366.466 360.343 364.802 361.99 362.767 361.99H310.735C308.682 361.99 307.036 360.325 307.036 358.289C307.036 356.235 308.699 354.588 310.735 354.588H362.767C364.82 354.588 366.466 356.252 366.466 358.289Z" fill="#CCCCCC"></path><path d="M271.303 495.35C271.303 497.404 269.64 499.051 267.605 499.051H215.572C213.519 499.051 211.874 497.387 211.874 495.35C211.874 493.296 213.537 491.649 215.572 491.649H267.605C269.658 491.649 271.303 493.314 271.303 495.35Z" fill="#CCCCCC"></path><path d="M271.303 510.119C271.303 512.173 269.64 513.82 267.605 513.82H215.572C213.519 513.82 211.874 512.155 211.874 510.119C211.874 508.065 213.537 506.418 215.572 506.418H267.605C269.658 506.418 271.303 508.083 271.303 510.119Z" fill="#CCCCCC"></path><g opacity="0.6"><path d="M177.345 253.385C177.345 254.713 176.283 255.776 174.955 255.776H141.4C140.073 255.776 139.011 254.713 139.011 253.385C139.011 252.057 140.073 250.995 141.4 250.995H174.973C176.3 250.995 177.362 252.057 177.362 253.385H177.345Z" fill="#CCCCCC"></path><path d="M177.345 262.912C177.345 264.24 176.283 265.303 174.955 265.303H141.4C140.073 265.303 139.011 264.24 139.011 262.912C139.011 261.584 140.073 260.522 141.4 260.522H174.973C176.3 260.522 177.362 261.584 177.362 262.912H177.345Z" fill="#CCCCCC"></path></g></g><path opacity="0.7" d="M127.383 293.016L124.286 298.612L124.109 325.883L124.127 329.247L145.577 339.004L159.523 302.738L127.383 293.016Z" fill="#CCCCCC"></path><path d="M129.348 285.598L115.179 322.436L149.881 335.799L164.05 298.962L129.348 285.598Z" fill="#45C678"></path><path d="M715.188 620.441H633.122C626.697 620.441 621.494 625.647 621.494 632.075H726.797C726.797 625.647 721.594 620.441 715.17 620.441H715.188Z" fill="#323232"></path><path d="M263.923 627.365C263.923 631.385 260.667 634.625 256.667 634.625H219.537C215.519 634.625 212.281 631.367 212.281 627.365C212.281 623.345 215.537 620.105 219.537 620.105H256.667C260.685 620.105 263.923 623.363 263.923 627.365Z" fill="#010202"></path><path d="M328.734 637.14H324.822V638.521H328.734V637.14Z" fill="#323232"></path><path d="M292.276 624.142H209.732C201.803 624.142 195.379 630.57 195.379 638.504H325.459C325.459 630.57 300.204 624.142 292.276 624.142Z" fill="#E470AA"></path><mask id="mask0_3_168" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="195" y="624" width="131" height="15"><path d="M292.276 624.142H209.732C201.803 624.142 195.379 630.57 195.379 638.504H325.459C325.459 630.57 300.204 624.142 292.276 624.142Z" fill="white"></path></mask><g mask="url(#mask0_3_168)"><path d="M210.847 617.023H173.982V649.784H210.847V617.023Z" fill="#323232"></path><path d="M251.853 615.536H250.084V644.454H251.853V615.536Z" fill="#E994BD"></path><path d="M255.393 615.536H253.623V644.454H255.393V615.536Z" fill="#E994BD"></path><path opacity="0.2" d="M327.371 620.848H300.824V644.17H327.371V620.848Z" fill="white"></path></g><path d="M724.833 624.39H623.459C615.53 624.39 609.106 630.818 609.106 638.752H739.186C739.186 630.818 732.762 624.39 724.833 624.39Z" fill="#FFC856"></path><path d="M577.851 204.298C577.851 207.432 575.302 209.982 572.17 209.982H411.189C408.056 209.982 405.508 207.432 405.508 204.298C405.508 201.164 408.056 198.614 411.189 198.614H572.17C575.302 198.614 577.851 201.164 577.851 204.298Z" fill="#C2DBF6"></path><path opacity="0.7" d="M216.121 543.074L227.961 587.681L268.295 575.462L253.517 535.318L216.121 543.074Z" fill="#CCCCCC"></path><path d="M254.583 528.903L216.153 543.066L231.164 583.844L269.593 569.681L254.583 528.903Z" fill="#DE4E96"></path><path d="M240.881 530.271C243.783 533.228 243.73 537.992 240.774 540.896C237.819 543.8 233.058 543.747 230.156 540.79C227.253 537.832 227.306 533.069 230.262 530.165C233.217 527.261 237.978 527.314 240.881 530.271Z" fill="#BF8C23"></path><path d="M240.544 530.59C243.447 533.547 243.394 538.31 240.438 541.215C237.483 544.119 232.722 544.066 229.819 541.108C226.917 538.151 226.97 533.388 229.925 530.483C232.881 527.579 237.642 527.632 240.544 530.59Z" fill="#FFBB2E"></path><path d="M340.603 493.671L305.119 504.79L316.91 542.458L352.394 531.338L340.603 493.671Z" fill="#66C2F0"></path><path d="M340.522 513.296L334.759 552.344L371.543 557.779L377.306 518.731L340.522 513.296Z" fill="#FFBB2E"></path><path d="M316.147 544.824L310.384 583.872L347.169 589.307L352.932 550.259L316.147 544.824Z" fill="#45C678"></path><path d="M478.667 366.931L453.256 423.532L506.579 447.499L531.99 390.898L478.667 366.931Z" fill="#E16070"></path><path d="M505.979 389.278C511.893 389.278 516.687 384.482 516.687 378.565C516.687 372.648 511.893 367.851 505.979 367.851C500.066 367.851 495.272 372.648 495.272 378.565C495.272 384.482 500.066 389.278 505.979 389.278Z" fill="#949494"></path><path d="M516.032 378.565C516.032 384.479 511.236 389.278 505.324 389.278C499.413 389.278 494.617 384.479 494.617 378.565C494.617 372.65 499.413 367.851 505.324 367.851C511.236 367.851 516.032 372.65 516.032 378.565Z" fill="#CCCCCC"></path><path opacity="0.7" d="M276.684 349.151H225.554V411.626H276.684V349.151Z" fill="#CCCCCC"></path><path opacity="0.2" d="M582.594 503.496L575.09 493.579L569.09 471.356C569.09 471.356 562.401 448.99 559.179 441.925C558.684 440.844 558.153 439.835 557.587 438.861C558.808 439.18 559.994 439.428 561.144 439.587C564.719 440.118 568.046 445.395 573.993 447.733C580.948 450.478 585.249 449.362 588.594 450.92C591.762 452.408 592.735 455.702 596.257 461.581C600.752 469.089 605.477 470.665 607.867 474.242C608.805 475.659 609.46 480.865 609.46 480.865C609.353 482.636 609.69 484.832 609.902 486.053C610.327 488.373 611.778 495.333 611.778 495.333L589.496 507.976L582.594 503.478V503.496ZM770.299 864L705.577 683.695L694.038 685.537L694.145 683.695L689.278 684.208C682.128 662.959 676.393 646.472 673.827 640.115C670.394 631.686 670.447 612.827 671.42 603.778C673.225 587.167 679.207 554.195 683.42 538.027C685.809 528.872 691.897 510.934 694.817 501.938C698.127 491.791 696.268 488.108 693.915 484.283C689.579 477.253 672.889 471.214 665.704 467.159C662.731 465.477 654.749 460.624 650.006 457.72C650.006 457.72 623.388 431.264 615.194 423.791C613.282 422.038 609.07 418.78 606.592 418.019C602.787 416.85 594.593 417.93 590.682 417.169C588.417 416.726 583.974 414.884 581.78 414.619C578.523 414.229 571.002 416.124 567.728 416.248C558.719 416.602 532.756 414.619 532.756 414.619C532.756 414.619 525.111 415.663 527.677 423.791C527.819 424.252 528.526 424.942 529.181 425.491C529.022 425.651 528.863 425.81 528.739 425.952C526.562 428.466 524.757 434.965 524.367 438.489C523.819 443.394 526.12 453.222 525.872 458.145C525.713 461.333 524.12 467.903 525.128 470.913C529.482 483.982 537.181 503.567 540.738 514.599C543.021 521.718 545.145 534.238 548.685 543.428C549.092 544.473 552.295 545.004 552.277 546.137C552.171 564.147 558.348 582.174 563.675 592.976C567.374 600.502 578.7 611.977 581.674 619.396C585.373 628.587 592.753 658.089 600.982 693.434L597.372 693.806L600.345 700.411L586.098 702.678L618.362 863.982H770.264L770.299 864Z" fill="#92A4B9"></path><g opacity="0.3"><path d="M484.476 403.268C484.618 398.61 484.972 404.348 485.963 405.534C486.954 406.703 490.299 405.853 491.431 405.446C494.334 404.383 495.573 402.683 498.723 402.347C503.112 401.886 507.271 400.7 511.554 399.673C514.58 398.947 514.12 397.318 511.112 398.044C505.82 399.319 500.404 399.372 495.183 400.7C494.033 401.001 492.723 401.55 491.821 402.347C489.644 404.224 490.299 401.798 489.821 400.062C489.201 397.796 485.396 398.097 483.768 398.734C480.936 399.85 479.45 401.444 479.344 404.649C479.326 405.481 484.423 404.791 484.476 403.268Z" fill="#010202"></path></g><path opacity="0.2" d="M664.146 256.803C669.366 256.803 673.597 252.458 673.597 247.099C673.597 241.739 669.366 237.395 664.146 237.395C658.927 237.395 654.696 241.739 654.696 247.099C654.696 252.458 658.927 256.803 664.146 256.803Z" fill="#666666"></path><path d="M637.98 235.228L614.984 286.45L663.254 308.146L686.25 256.924L637.98 235.228Z" fill="#66C2F0"></path><path d="M661.97 257.812C667.883 257.812 672.677 253.016 672.677 247.099C672.677 241.182 667.883 236.385 661.97 236.385C656.056 236.385 651.262 241.182 651.262 247.099C651.262 253.016 656.056 257.812 661.97 257.812Z" fill="#949494"></path><path d="M672.004 247.099C672.004 253.013 667.208 257.812 661.297 257.812C655.386 257.812 650.59 253.013 650.59 247.099C650.59 241.184 655.386 236.385 661.297 236.385C667.208 236.385 672.004 241.184 672.004 247.099Z" fill="#CCCCCC"></path><path d="M273.233 345.362H221.908V408.81H273.233V345.362Z" fill="#FFBB2E"></path><path d="M234.077 339.611L214.956 354.9L219.74 360.89L238.861 345.601L234.077 339.611Z" fill="#949494"></path><path d="M275.377 394.646L256.256 409.935L261.04 415.925L280.161 400.636L275.377 394.646Z" fill="#949494"></path><path d="M671.564 338.993L632.786 413.464L693.009 444.859L731.787 370.388L671.564 338.993Z" fill="#B1C909"></path><path d="M689.43 339.678L657.632 345.926L659.586 355.882L691.384 349.635L689.43 339.678Z" fill="#DE4E96"></path><path d="M704.262 429.523L672.464 435.771L674.418 445.727L706.216 439.479L704.262 429.523Z" fill="#DE4E96"></path><path d="M719.4 347.823C707.878 347.823 698.233 356.022 696.003 366.913L692.534 362.061C691.968 361.264 690.853 361.087 690.056 361.653C689.26 362.22 689.083 363.336 689.649 364.132L695.844 372.774C695.844 372.774 695.861 372.774 695.879 372.792C695.879 372.792 695.879 372.827 695.897 372.827C695.914 372.845 695.95 372.863 695.967 372.88C696.074 373.004 696.215 373.111 696.375 373.199C696.428 373.234 696.463 373.288 696.516 373.305C696.516 373.305 696.552 373.305 696.569 373.323C696.799 373.429 697.029 373.482 697.295 373.482C697.472 373.482 697.667 373.447 697.844 373.394C697.879 373.394 697.897 373.376 697.932 373.358C698.003 373.341 698.056 373.305 698.109 373.27C698.18 373.234 698.268 373.217 698.321 373.164C698.321 373.164 698.321 373.146 698.339 373.128C698.339 373.128 698.374 373.128 698.374 373.111L706.834 366.399C707.595 365.797 707.737 364.681 707.117 363.92C706.516 363.159 705.401 363.017 704.64 363.637L699.436 367.763C701.295 358.43 709.524 351.365 719.4 351.365C730.62 351.365 739.752 360.502 739.752 371.729C739.752 382.956 730.62 392.094 719.4 392.094C718.426 392.094 717.63 392.891 717.63 393.865C717.63 394.839 718.426 395.635 719.4 395.635C732.567 395.635 743.292 384.904 743.292 371.729C743.292 358.554 732.567 347.823 719.4 347.823Z" fill="#666666"></path><path d="M479.698 265.161H405.525V355.774H479.698V265.161Z" fill="#FFBB2E"></path><path d="M454.372 263.036C454.372 268.951 449.576 273.75 443.664 273.75C437.753 273.75 432.957 268.951 432.957 263.036C432.957 257.122 437.753 252.323 443.664 252.323C449.576 252.323 454.372 257.122 454.372 263.036Z" fill="#949494"></path><path d="M453.699 263.036C453.699 268.951 448.903 273.75 442.992 273.75C437.081 273.75 432.285 268.951 432.285 263.036C432.285 257.122 437.081 252.323 442.992 252.323C448.903 252.323 453.699 257.122 453.699 263.036Z" fill="#CCCCCC"></path><path d="M519.784 454.497L505.377 465.299C505.377 465.299 503.979 479.909 521.076 482.122C538.083 484.318 570.471 462.023 587.39 464.715C591.921 465.441 596.965 477.075 601.495 476.42C605.92 475.783 608.999 460.199 608.999 460.199L557.162 427.138L519.766 454.48L519.784 454.497Z" fill="#F7B081"></path><path d="M518.987 483.929L510.386 491.933C510.386 491.933 511.731 507.551 528.19 504.736C543.623 502.115 584.399 477.111 584.399 477.111H593.797L606.592 484.318L599.584 462.696L565.179 454.692L518.97 483.911L518.987 483.929Z" fill="#FFCAA2"></path><path d="M523.589 503.142C523.589 503.142 521.235 506.418 521.412 508.189C521.766 511.713 525.589 517.556 531.588 519.965C543.517 524.746 582.806 515.361 582.806 515.361L612.61 494.146L600.611 478.138L583.213 473.729L523.589 503.16V503.142Z" fill="#F7B081"></path><path d="M502.953 427.156L681.349 581.253L690.924 569.388L512.191 417.416L502.953 427.156Z" fill="#5273BF"></path><path d="M502.953 427.156L490.44 406.933L512.191 417.416L502.953 427.156Z" fill="#DFA58A"></path><mask id="mask1_3_168" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="490" y="406" width="23" height="22"><path d="M502.953 427.156L490.44 406.933L512.191 417.416L502.953 427.156Z" fill="white"></path></mask><g mask="url(#mask1_3_168)"><path d="M487.803 405.623L492.069 411.378L495.998 407.712L487.75 405.41" fill="#010202"></path></g><path d="M689.879 578.03C687.419 581.448 683.72 583.006 681.632 581.501C679.544 579.996 679.862 576.011 682.322 572.576C684.782 569.158 688.481 567.6 690.57 569.105C692.658 570.61 692.339 574.595 689.879 578.03Z" fill="#5C85B5"></path><path d="M687.933 576.631C686.747 578.278 684.959 579.039 683.95 578.313C682.942 577.587 683.101 575.657 684.287 574.01C685.472 572.363 687.26 571.602 688.269 572.328C689.278 573.054 689.118 574.984 687.933 576.631Z" fill="#010202"></path><path d="M519.447 423.951C519.447 423.951 517.04 422.215 516.757 421.312C514.191 413.184 521.837 412.139 521.837 412.139C521.837 412.139 547.8 414.123 556.808 413.769C560.082 413.645 567.604 411.75 570.86 412.139C573.072 412.405 577.497 414.247 579.762 414.689C583.673 415.451 591.868 414.371 595.673 415.539C598.15 416.301 602.363 419.559 604.274 421.312C612.468 428.785 639.086 455.241 639.086 455.241L598.522 478.404C598.522 478.404 597.885 473.197 596.929 471.781C594.54 468.204 589.815 466.628 585.319 459.119C581.797 453.24 580.824 449.946 577.656 448.459C574.311 446.901 570.011 448.016 563.055 445.271C557.109 442.916 553.782 437.639 550.207 437.126C537.906 435.319 519.43 423.951 519.43 423.951H519.447Z" fill="#FFB781"></path><path d="M517.837 423.473C517.837 423.473 526.314 411.095 544.667 428.643C552.401 436.045 556.365 452.673 556.365 452.673C556.365 452.673 563.073 482.654 567.922 491.561C569.71 494.854 575.479 500.397 579.019 501.619C586.134 504.063 608.999 499.335 608.999 499.335L603.778 501.619L571.816 511.235C571.816 511.235 559.657 497.281 559.516 496.82C559.374 496.377 550.507 462.732 550.507 462.289C550.507 461.846 517.819 423.49 517.819 423.49L517.837 423.473Z" fill="#F6A570"></path><path d="M529.553 422.003C522.491 419.648 519.235 421.844 517.819 423.473C515.642 425.987 513.837 432.486 513.448 436.01C512.899 440.915 515.2 450.743 514.952 455.666C514.793 458.854 513.2 465.423 514.209 468.434C518.563 481.503 526.261 501.088 529.818 512.12C532.101 519.239 547.446 579.677 552.773 590.497C556.472 598.023 567.798 609.498 570.772 616.917C581.939 644.631 620.769 843.193 620.769 843.193L733.257 849.125C733.257 849.125 673.403 663.454 662.89 637.636C659.456 629.207 659.51 610.348 660.483 601.299C662.288 584.688 668.27 551.716 672.482 535.548C674.871 526.393 680.96 508.454 683.88 499.459C687.189 489.312 685.331 485.629 682.977 481.804C678.641 474.791 661.952 468.735 654.766 464.68C650.413 462.218 635.352 452.975 635.352 452.975C635.352 452.975 604.309 466.805 598.947 476.403C598.062 477.979 598.628 481.839 598.947 483.61C599.372 485.93 600.823 492.889 600.823 492.889C600.823 492.889 585.408 505.054 579.019 504.541C572.223 503.992 566.223 493.721 564.861 490.923C562.33 485.753 559.64 474.455 558.118 468.912C556.065 461.421 551.428 446.547 548.207 439.481C543.641 429.423 535.482 424.022 529.5 422.038L529.553 422.003Z" fill="#FFB781"></path><mask id="mask2_3_168" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="513" y="420" width="221" height="430"><path d="M529.553 422.003C522.491 419.648 519.235 421.844 517.819 423.473C515.642 425.987 513.837 432.486 513.448 436.01C512.899 440.915 515.2 450.743 514.952 455.666C514.793 458.854 513.2 465.423 514.209 468.434C518.563 481.503 526.261 501.088 529.818 512.12C532.101 519.239 547.446 579.677 552.773 590.497C556.472 598.023 567.798 609.498 570.772 616.917C581.939 644.631 620.769 843.193 620.769 843.193L733.257 849.125C733.257 849.125 673.403 663.454 662.89 637.636C659.456 629.207 659.51 610.348 660.483 601.299C662.288 584.688 668.27 551.716 672.482 535.548C674.871 526.393 680.96 508.454 683.88 499.459C687.189 489.312 685.331 485.629 682.977 481.804C678.641 474.791 661.952 468.735 654.766 464.68C650.413 462.218 635.352 452.975 635.352 452.975C635.352 452.975 604.309 466.805 598.947 476.403C598.062 477.979 598.628 481.839 598.947 483.61C599.372 485.93 600.823 492.889 600.823 492.889C600.823 492.889 585.408 505.054 579.019 504.541C572.223 503.992 566.223 493.721 564.861 490.923C562.33 485.753 559.64 474.455 558.118 468.912C556.065 461.421 551.428 446.547 548.207 439.481C543.641 429.423 535.482 424.022 529.5 422.038L529.553 422.003Z" fill="white"></path></mask><g mask="url(#mask2_3_168)"><path d="M586.47 691.345L683.225 681.216L682.712 690.902L593.779 707.495L586.47 691.345Z" fill="#F6A570"></path></g><path d="M515.766 458.358C515.766 458.358 529.553 448.123 533.004 444.634C533.924 443.695 534.898 441.057 534.88 439.747C534.739 434.505 534.898 422.516 523.783 423.526C519.377 423.933 516.828 426.448 515.678 428.537C514.191 431.247 513.377 435.443 513.377 437.852C513.377 443.023 515.784 458.376 515.784 458.376L515.766 458.358Z" fill="#FFDDC4"></path><path d="M575.214 700.199L613.459 864H763.008L694.658 681.216L575.214 700.199Z" fill="#B1C909"></path><path d="M575.214 700.199L582.364 730.551L704.693 708.132L694.658 681.216L575.214 700.199Z" fill="white"></path></g><defs><clipPath id="clip0_3_168"><rect width="684.878" height="713.854" fill="white" transform="translate(107.756 150.146)"></rect></clipPath></defs></svg></main>',1))])}t(4114);var r=t(1986),n=t(8531),Z=t(5166),H=t(1496),u=t(7668),c=t(1387),V=(0,l.pM)({name:"AuthView",components:{BaseModal:r.A,BaseInput:n.A,TheHeader:Z.A},setup(){const C=(0,H.n)(),a=(0,u.$)(),t=(0,c.rd)();return{authStore:C,errorStore:a,router:t}},data(){return{modalIsOpen:!1,isRegistering:!1,user:{email:null,password:null,confirm_password:null}}},methods:{async register(){await(0,H.n)().register(this.user),this.isUserAuth&&(await(0,H.n)().auth(this.user),this.router.push({name:"notes"}))},async auth(){await this.authStore.auth({email:this.user.email,password:this.user.password}),await(0,H.n)().auth(this.user),this.router.push({name:"notes"})},toggleModal(C){this.modalIsOpen=C,C||this.clearUser()},setRegistrationModal(C){this.isRegistering=C},clearUser(){this.errorStore.clearError();for(let C in this.user)this.user[C]=null}},computed:{isUserAuth(){return this.authStore.isAuth},isLoginButtonDisabled(){return this.isRegistering?!this.user.email||!this.user.password||!this.user.confirm_password:!this.user.email||!this.user.password}}}),m=t(1241);const g=(0,m.A)(V,[["render",M]]);var F=g}}]);
//# sourceMappingURL=437.72c0bd4a.js.map