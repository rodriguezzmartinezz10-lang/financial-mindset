window.onload = function() {
    console.log('Página cargada');
    
    const form = document.getElementById('contactForm');
    console.log('Formulario encontrado:', form);
    
    const notification = document.createElement('div');
    notification.className = 'form-notification hidden';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">✓</div>
            <h3>¡Mensaje enviado con éxito!</h3>
            <p>Gracias por tu interés. Nos pondremos en contacto contigo en las próximas 24 horas.</p>
        </div>
    `;
    document.body.appendChild(notification);

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const templateParams = {
                from_name: form.querySelector('[name="nombre"]').value,
                from_email: form.querySelector('[name="email"]').value,
                whatsapp: form.querySelector('[name="country_code"]').value + ' ' + form.querySelector('[name="whatsapp"]').value,
                programa: form.querySelector('[name="programa"]').value,
                to_name: 'Financial Mindset'
            };

            emailjs.send('service_cdsv7h2', 'template_qn0288t', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Mostrar notificación
                    notification.classList.remove('hidden');
                    setTimeout(() => {
                        notification.classList.add('show');
                    }, 100);

                    // Limpiar formulario
                    form.reset();

                    // Ocultar notificación después de 5 segundos
                    setTimeout(() => {
                        notification.classList.remove('show');
                        setTimeout(() => {
                            notification.classList.add('hidden');
                        }, 300);
                    }, 5000);
                })
                .catch(function(error) {
                    console.error('FAILED...', error);
                    alert('Hubo un error al enviar el formulario: ' + error.text);
                });
        });
    }
});

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const templateParams = {
                from_name: form.querySelector('[name="nombre"]').value,
                from_email: form.querySelector('[name="email"]').value,
                whatsapp: form.querySelector('[name="country_code"]').value + ' ' + form.querySelector('[name="whatsapp"]').value,
                programa: form.querySelector('[name="programa"]').value,
                to_name: 'Financial Mindset'
            };

        emailjs.send('service_cdsv7h2', 'template_qn0288t', templateParams)
            .then(function(response) {
                // Mostrar notificación
                notification.classList.remove('hidden');
                setTimeout(() => {
                    notification.classList.add('show');
                }, 100);

                // Limpiar formulario
                form.reset();

                // Ocultar notificación después de 5 segundos
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        notification.classList.add('hidden');
                    }, 300);
                }, 5000);
            }, function(error) {
                console.error('Error:', error);
                alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
            });
    });
});
        .then(response => {
            // Mostrar notificación
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);

            // Limpiar formulario
            form.reset();

            // Ocultar notificación después de 5 segundos
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.classList.add('hidden');
                }, 300);
            }, 5000);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
        });
    });
});
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                // Mostrar notificación sin importar la respuesta
                notification.classList.remove('hidden');
                setTimeout(() => {
                    notification.classList.add('show');
                }, 100);

                // Limpiar formulario
                form.reset();

                // Ocultar notificación después de 5 segundos
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        notification.classList.add('hidden');
                    }, 300);
                }, 5000);
            }
        };
        
        // Enviar el formulario
        xhr.send(formData);
    });
});

            if (response.ok) {
                // Mostrar notificación
                notification.classList.remove('hidden');
                setTimeout(() => {
                    notification.classList.add('show');
                }, 100);

                // Limpiar formulario
                form.reset();

                // Ocultar notificación después de 5 segundos
                setTimeout(() => {
                    notification.classList.remove('show');
                    setTimeout(() => {
                        notification.classList.add('hidden');
                    }, 300);
                }, 5000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
});