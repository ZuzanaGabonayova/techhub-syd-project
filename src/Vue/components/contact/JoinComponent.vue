<template>

    <section id="join">

        <div class="container-fluid join">

            <div class="row join-heading">

                <div class="col-sm-12 col-md-12 join-heading-text">

                    <h2>JOIN US TO BUILD YOUR STARTUP</h2>

                </div>

            </div>


            <div class="row join-forms">

                <div class="form-container col-sm-12 col-md-6">

                    <form class="form" ref="form" @submit.prevent="sendMail" action="">

                        <div class="form-group mb-3 d-flex flex-column align-items-start">
                            <label for="nameInput" class="form-label">Name</label>
                            <input name="from_name" placeholder="Name" type="text" :value="inputFieldReset" required>
                        </div>

                        <div class="form-group">
                            <label for="emailInput" class="form-label">E-mail</label>
                            <input name="email" placeholder="E-mail" type="email" :value="inputFieldReset" required>
                        </div>

                        <div class="form-group">
                            <label for="messageInput" class="form-label">Message</label>
                            <textarea class="text-area" name="message" placeholder="Message..." type="text" :value="inputFieldReset" required></textarea>
                        </div>

                        <div class="form-group">
                            <button class="submit" type="submit" name="send">SUBSCRIBE</button>
                        </div>

                    </form>
                </div>


                <div class="form-container col-sm-12 col-md-6 newsletter">

                    <form class="newsletter" ref="form" @submit.prevent="sendMail2" action="">

                        <div class="form-group">
                            <label for="emailInput" class="form-label">E-mail</label>
                            <input name="email" placeholder="e-mail" type="email" :value="inputFieldReset" required>
                        </div>

                        <div class="form-group">
                            <button class="submit" type="submit" name="send">SUBSCRIBE</button>
                        </div>

                    </form>
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