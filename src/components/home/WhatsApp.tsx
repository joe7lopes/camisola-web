import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'

interface IProps {
  className?: string
}

const WhatsApp = ({ className }: IProps) => (
  <div className={`${className} c-whatsapp`}>
    <FaWhatsapp size={40} color="white" className="m-r-sm" />
    + 351 919 255 684
    </div>
)

export default WhatsApp;
