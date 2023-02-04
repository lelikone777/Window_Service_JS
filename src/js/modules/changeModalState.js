import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
      windowWidth = document.querySelectorAll('#width'),
      windowHeight = document.querySelectorAll('#height'),
      windowType = document.querySelectorAll('#view_type'),
      windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  // if  (windowWidth.value.length < 1 || windowHeight.value.length < 1) {
  //   document.querySelector('.popup_calc .popup_calc_button').setAttribute('disabled', 'disabled');
  // }

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN' :
            state[prop] = i;
            break;
          case 'INPUT' :
            if (item.getAttribute('type') === 'checkbox'){
              i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
              elem.forEach((checkbox, j) => {
                checkbox.checked = false;
                if (i === j) {
                  checkbox.checked = true;
                }
              })
            } else {
              state[prop] = item.value;
            }
            break;
          case 'SELECT' :
            state[prop] = item.value;
            break;
        }
        console.log(state)
      })
    })
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;