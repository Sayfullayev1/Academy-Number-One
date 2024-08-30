import axios from "axios";


export default function ApiDataRepository(props) {

    let data = props

        
        const token = '7020592884:AAEC9N1Vp7GL4wiDmCQvWt6dAUIHPD0Cbio'; 
        const channelId = '-1002218172841'; // For public channels, use the username prefixed with @
        let jsonData = JSON.stringify(data)
        const message = `Ism: ${data.name}\n Email: ${data.email}\n Telefon nomer: №: ${data.phone}`
        const encodedMessage = encodeURIComponent(message);

        const url = `https://api.telegram.org/bot${token}/sendMessage?text="${encodedMessage}"&chat_id=${channelId}`;

        axios.post(url)
            .then(response => {
                // console.log('Message sent:', response.data);
            })
            .catch(error => {
                // console.error('Error sending message:', error);
            });

}
