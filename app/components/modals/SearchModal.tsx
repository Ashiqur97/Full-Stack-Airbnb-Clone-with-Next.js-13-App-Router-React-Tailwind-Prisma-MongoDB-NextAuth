'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import Modal from './Modal';

import useSearchModal from '@/app/hooks/useSearchModal';
import { useState } from 'react';
import {Range} from "react-date-range";


enum STEPS {
    LOCATION = 0,
    DATE = 1,
    INFO = 2
}


const  SearchModal = () => {
    const router = useRouter();
    const params = useSearchParams();
    const searchModal = useSearchModal();

    const [step,setStep] = useState();
    const [guestCount,setGuestCount] = useState(1);
    const [roomCount,setRoomCount] = useState(1);
    const [bathroomCount, setBathroomCount] = useState(1);
    const [dateRange, setDateRange] = useState<Range>({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    })


    return (
        <Modal 
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={searchModal.onOpen}
            title='Filters'
            actionLabel='Search'
        
        />
    )
}

export default SearchModal;