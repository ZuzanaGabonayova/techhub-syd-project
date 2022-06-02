<template>

    <section id="join">

        <div class="container-fluid join">

            <div class="row">

                <div 
                class="col-sm-12 col-md-12 join-all"
                data-aos="zoom-in"
                data-aos-duration="1500"
                >

                    <div class="row join-heading">

                        <div class="col-sm-12 col-md-12 join-heading-text">

                            <h3>JOIN US TO BUILD YOUR STARTUP</h3>

                        </div>

                    </div>


                    <div class="row join-components">

                        <div class="col-sm-12 col-md-2 woman-img">
                            <img src="../../../assets/images/illustrations/woman.png" alt="woman">
                        </div>


                        <div class="form-container col-sm-12 col-md-4 contact-form">

                            <form class="form" ref="form" @submit.prevent="sendMail" action="">

                                <div class="form-group">
                                    <input name="from_name" placeholder="Name" type="text" :value="inputFieldReset" required>
                                </div>

                                <div class="form-group">
                                    <input name="email" placeholder="E-mail" type="email" :value="inputFieldReset" required>
                                </div>

                                <div class="form-group">
                                    <textarea class="text-area" name="message" placeholder="Message..." type="text" :value="inputFieldReset" required></textarea>
                                </div>

                                <div class="form-group">
                                    <button class="submit" type="submit" name="send">SEND A MESSAGE</button>
                                </div>

                            </form>
                        </div>


                        <div class="form-container col-sm-12 col-md-4 newsletter">

                            <h3>Keep up with today's top tech news and sign up to our NEWSLETTER!</h3>

                            <form class="newsletter" ref="form" @submit.prevent="sendMail2" action="">

                                <div class="form-group">
                                    <input name="email" placeholder="E-mail" type="email" :value="inputFieldReset" required>
                                </div>

                                <div class="form-group">
                                    <button class="submit" type="submit" name="send">SUBSCRIBE</button>
                                </div>

                                <p>YOUR EMAIL IS SAFE WITH US, WE DON'T SPAM</p>

                            </form>

                            <div class="team">
                                <div class="team-item">
                                    <a href="https://www.linkedin.com/in/kasperthom/" alt="linkedin kasper" target="_blank">
                                        <img src="../../../assets/images/team/kasper.jpg" alt="kasper">
                                    </a>
                                </div>
                                <div class="team-item">
                                    <a href="https://www.linkedin.com/in/trinefalbe/" alt="linkedin trine" target="_blank">
                                        <img src="../../../assets/images/team/trine.jpg" alt="trine">
                                    </a>
                                </div>
                                <div class="team-item">
                                    <a href="https://www.linkedin.com/in/ronni-baslund/" alt="linkedin ronni" target="_blank">
                                        <img src="../../../assets/images/team/ronni.jpg" alt="ronni">
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-2 contact-icons">

                            <div class="social-item">
                                <a href="https://www.linkedin.com/company/techhub-syd/" alt="linkedin" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                            <div class="social-item">
                                <a href="https://www.facebook.com/" alt="facebook" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>


        </div>

    </section>
         
</template>

<script>
import emailjs from 'emailjs-com'
import {ref} from 'vue';

export default {
    setup() {
        const form = ref(null);
        const inputFieldReset = ref(null);

        const sendMail = () => {
            emailjs.sendForm('service_7b0i3sy', 'template_on844kz', form.value, 'hUrowQTXHpdB3OXsP')
            .then(() => {
                alert('Message sent!')
                inputFieldReset.value = " ";
            }, (error) => {
                alert('Message not sent', error);
            });
        }

        const sendMail2 = () => {
            emailjs.sendForm('service_7b0i3sy', 'template_4nmjvlr', form.value, 'hUrowQTXHpdB3OXsP')
            .then(() => {
                alert('Successful join to our newsletter')
                inputFieldReset.value = " ";
            }, (error) => {
                alert('Unsuccessfull', error);
            });
        }

        return {
            form,
            inputFieldReset,
            sendMail,
            sendMail2
        }
    }
}

</script>