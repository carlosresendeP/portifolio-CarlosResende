import { useState } from "react"
import { useForm } from "react-hook-form"

export const useContactModal = () => {
    const [showModal, setShowModal] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm()

    const onSubmit = async (data) => {
        try {
            console.log('Dados do formulário:', data)

            // Integração com n8n
            const response = await fetch(import.meta.env.VITE_URL_N8N, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Resposta do n8n:', result);

                if (result.success === true) {
                    alert('Obrigado pelo interesse! Entrarei em contato em breve.')
                } else {
                    alert('Erro ao enviar. Tente novamente.')
                }

                setShowModal(false)
                reset()
            } else {
                throw new Error('Erro na resposta do servidor');
            }

        } catch (error) {
            console.error('Erro ao enviar formulário:', error)
            alert('Erro ao enviar. Tente novamente.')
        }
    }

    const openModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        reset()
    }

    return {
        showModal,
        openModal,
        closeModal,
        register,
        handleSubmit,
        onSubmit,
        errors,
        isSubmitting
    }
}