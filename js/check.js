const getHref = document.querySelector('.dashboard-title-link').href;
const getLinkForInnerText = document.querySelector('a.dashboard-title-link');

const copyLinkBtn = document.querySelector('.dashboard-title-copy-link');
const copyLinkBtnText = document.querySelector(
  '.dashboard-title-copy-link-text',
);
const printBtn = document.querySelector('.print-btn');
const linkText = document.querySelector('.dashboard-title-link');
const checkAll = document.getElementById('checked-all');
const checkBoxes = document.querySelectorAll(
  'input.dashboard-input-checked-card',
);

// ========Displays the link text based on the link
function displaysLinkTextBasedOnLink() {
  getLinkForInnerText.textContent = getHref;
}

// ======Show escape text "Copied" when clicking CopyLink button=====
copyLinkBtn.onclick = function () {
  copyLinkBtnText.classList.add('copy-link-active');
  setTimeout(() => copyLinkBtnText.classList.remove('copy-link-active'), 2000);
  // ==========Copy link on button click
  navigator.clipboard.writeText(linkText.innerHTML);
};

// ======Selecting one or all checkboxes======
for (let i = 0; i < checkBoxes.length; i++) {
  checkBoxes[i].onclick = function () {
    const checkedCount = document.querySelectorAll(
      'input.dashboard-input-checked-card:checked',
    ).length;

    checkAll.checked = checkedCount > 0;
    checkAll.indeterminate =
      checkedCount > 0 && checkedCount < checkBoxes.length;

    // ======Show the "Print" button if at least one checkbox is selected
    printBtn.classList.add('print-btn-show');
    if (checkedCount === 0) {
      printBtn.classList.remove('print-btn-show');
    }
  };
}

checkAll.onclick = function () {
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].checked = this.checked;
    // ========Show "Print" button if all checkboxes are selected
    printBtn.classList.add('print-btn-show');
  }
  if (this.checked === false) {
    printBtn.classList.remove('print-btn-show');
  }
};

// ==========

displaysLinkTextBasedOnLink();
