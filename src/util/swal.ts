import Swal from 'sweetalert2';

export const alertPopup = ({ title, content, btnText }: { title: string; content: string; btnText: string }) => {
  const confirmText = btnText || '확인';

  const $swal = Swal.fire({
    title,
    text: content,
    html: content,
    showCancelButton: false,
    confirmButtonText: confirmText,
    focusConfirm: false,
    customClass: {
      popup: 'swal-alert-popup',
      title: 'swal-alert-title',
      htmlContainer: 'swal-alert-html',
      actions: 'swal-alert-actions',
      confirmButton: 'swal-alert-ok'
    }
  });

  return $swal;
};

export const confirmPopup = async ({ title, content, btnText }: { title: string; content: string; btnText: string }) => {
  const confirmText = btnText || '확인';

  const result = await Swal.fire({
    title,
    text: content,
    html: content,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: '취소',
    focusConfirm: false,
    reverseButtons: true,
    customClass: {
      popup: 'swal-alert-popup',
      title: 'swal-alert-title',
      htmlContainer: 'swal-alert-html',
      actions: 'swal-alert-actions',
      confirmButton: 'swal-alert-ok'
    }
  });

  if (result.isConfirmed) {
    return true;
  } else {
    return false;
  }
};
