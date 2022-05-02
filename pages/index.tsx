import type { NextPage } from 'next'
import Swal from 'sweetalert2'
import 'animate.css'
const Home: NextPage = () => {
  const handleClick = () => {
    Swal.fire({
      title: '<b>1</b>',
      icon: 'info',
      html:
        '<b>Waktu mengalir bagaikan air Ramadhan suci akan berakhir.</b>',
      // showCloseButton: true,
      // showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Lanjut'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: '<b>2</b>',
          icon: 'info',
          html:
            '<b>Andai jemari tak sempat berjabat.</b>',
          focusConfirm: false,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          confirmButtonText: 'Lanjut'
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire({
              title: '<b>3</b>',
              icon: 'info',
              html:
                '<b>Jika raga tak bisa bersua.</b>',
              focusConfirm: false,
              confirmButtonText: 'Lanjut',
              showClass: {
                popup: 'animate__animated animate__fadeInUp'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutDown'
              }
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire({
                  title: '<b>4</b>',
                  icon: 'info',
                  html:
                    '<b>Bila ada kata membekas luka.</b>',
                  focusConfirm: false,
                  confirmButtonText: 'Lanjut',
                  showClass: {
                    popup: 'animate__animated animate__bounceInLeft'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__bounceInRight'
                  }
                }).then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: '<b>5</b>',
                      icon: 'info',
                      html:
                        '<b>Bila ada tindakan membuat goresan di jiwa.</b>',
                      focusConfirm: false,
                      confirmButtonText: 'Lanjut',
                      showClass: {
                        popup: 'animate__animated animate__bounceInRight'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__bounceInLeft'
                      }
                    }).then((result) => {
                      /* Read more about isConfirmed, isDenied below */
                      if (result.isConfirmed) {
                        Swal.fire({
                          title: '<b>6</b>',
                          icon: 'info',
                          html:
                            '<b>Sadarilah, ku juga manusia.</b>',
                          focusConfirm: false,
                          confirmButtonText: 'Lanjut',
                          showClass: {
                            popup: 'animate__animated animate__rollIn'
                          },
                          hideClass: {
                            popup: 'animate__animated animate__rollOut'
                          }
                        }).then((result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: '<b>7</b>',
                              icon: 'info',
                              html:
                                '<b>Banyak salah dan dosa.</b>',
                              focusConfirm: false,
                              confirmButtonText: 'Lanjut',
                              showClass: {
                                popup: 'animate__animated animate__jackInTheBox'
                              },
                              hideClass: {
                                popup: 'animate__animated animate__rollIn'
                              }
                            }).then((result) => {
                              /* Read more about isConfirmed, isDenied below */
                              if (result.isConfirmed) {
                                Swal.fire({
                                  title: '<b>8</b>',
                                  icon: 'info',
                                  html:
                                    '<b>Dengan segala kerendahan hati.</b>',
                                  focusConfirm: false,
                                  confirmButtonText: 'Lanjut',
                                  showClass: {
                                    popup: 'animate__animated animate__zoomInRight'
                                  }
                                }).then((result) => {
                                  /* Read more about isConfirmed, isDenied below */
                                  if (result.isConfirmed) {
                                    Swal.fire({
                                      title: '<b>9</b>',
                                      icon: 'info',
                                      html:
                                        '<b>Dari lisan yang tak terjaga.</b>',
                                      focusConfirm: false,
                                      confirmButtonText: 'Lanjut',
                                      showClass: {
                                        popup: 'animate__animated animate__lightSpeedInRight'
                                      }
                                    }).then((result) => {
                                      /* Read more about isConfirmed, isDenied below */
                                      if (result.isConfirmed) {
                                        Swal.fire({
                                          title: '<b>10</b>',
                                          icon: 'info',
                                          html:
                                            '<b>Janji yang terabaikan.</b>',
                                          focusConfirm: false,
                                          confirmButtonText: 'Lanjut',
                                          showClass: {
                                            popup: 'animate__animated animate__zoomInLeft'
                                          }
                                        }).then((result) => {
                                          /* Read more about isConfirmed, isDenied below */
                                          if (result.isConfirmed) {
                                            Swal.fire({
                                              title: '<b>11</b>',
                                              icon: 'info',
                                              html:
                                                '<b>Tingkah laku yang tidak berkenan.</b>',
                                              focusConfirm: false,
                                              confirmButtonText: 'Lanjut'
                                            }).then((result) => {
                                              /* Read more about isConfirmed, isDenied below */
                                              if (result.isConfirmed) {
                                                Swal.fire({
                                                  title: '<b>12</b>',
                                                  icon: 'info',
                                                  html:
                                                    '<b>Serta hati yang berprasangka.</b>',
                                                  focusConfirm: false,
                                                  confirmButtonText: 'Lanjut'
                                                }).then((result) => {
                                                  /* Read more about isConfirmed, isDenied below */
                                                  if (result.isConfirmed) {
                                                    Swal.fire({
                                                      title: '<b>Saya mengucapkan</b>',
                                                      icon: 'info',
                                                      html:
                                                        '<b>Selamat Hari Raya Idul Fitri</b>',
                                                      focusConfirm: false,
                                                      confirmButtonText: 'Lanjut',
                                                      showClass: {
                                                        popup: 'animate__animated animate__zoomIn'
                                                      }
                                                    }).then((result) => {
                                                      /* Read more about isConfirmed, isDenied below */
                                                      if (result.isConfirmed) {
                                                        Swal.fire({
                                                          title: '<b>Mohon maaf lahir dan batin.</b>',
                                                          icon: 'info',
                                                          html:
                                                            '<b>Semoga Allah SWT menerima semua amal ibadah kita dan menjadikan kita kembali dalam keadaan yang suci.</b>',
                                                          focusConfirm: false,
                                                          confirmButtonText: 'Lanjut',
                                                          showClass: {
                                                            popup: 'animate__animated animate__slideInRight'
                                                          }
                                                        }).then((result) => {
                                                          /* Read more about isConfirmed, isDenied below */
                                                          if (result.isConfirmed) {
                                                            Swal.fire({
                                                              imageUrl: '/img/logo-modified.png',
                                                              imageHeight: 200,
                                                              imageAlt: 'A tall image',
                                                              html: '<a href="https://ajaxcoding.id" class="btn btn-primary" target="_blank"><b>AjaxCoding</b></a><br/><br/><b>THR dapat dikirim pada nomor berikut:</b><br/>BRI: 7116-0101-8679-534<br/>BSI: 1042351454<br/>OVO/GoPay: 089691077371<br/><br/>Terima kasih<br/><br/><br/><br/><br/><p>Copyright© AjaxCoding. All right reserved.</p>'
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            })
          }
        })
      }
    })

  }
  return (
    <>
      <body>
        <div className='container'>
          <div className='d-flex mt-5 align-items-center justify-content-center'>
            <a onClick={handleClick} className="animate__animated animate__flip btn btn-primary btn-lg active p-4" role="button" aria-pressed="true">Click Me</a>
          </div>
        </div>
      </body>
    </>
  )
}

export default Home
