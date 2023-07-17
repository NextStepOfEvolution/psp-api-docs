export default [
    {
        label: 'Начало работы',
        icon: 'pi pi-fw pi-file',
        to: { name: 'getting-started' },
        childrens: [
            {
                label: 'Глоссарий',
                icon: 'pi pi-fw pi-plus',
                to: { name: 'glossary' }
            }
        ]
    },
    {
        label: 'Web-касса',
        icon: 'pi pi-fw pi-file',
        to: { name: 'webkassa' },
        childrens: [
            {
                label: 'Общие сведения',
                icon: 'pi pi-fw pi-plus',
                to: { name: 'webkassa-introduction' }
            },
            // {
            //     label: 'Порядок проведения платежа',
            //     icon: 'pi pi-fw pi-plus',
            //     to: { name: 'webkassa-pay-map' }
            // },
            {
                label: 'Этап 1. Подготовка к интеграции',
                icon: 'pi pi-fw pi-plus',
                to: { name: 'webkassa-preparation' }
            },
            {
                label: 'Этап 2. Открытие Web-кассы',
                icon: 'pi pi-fw pi-plus',
                to: { name: 'webkassa-open' }
            },
            {
                label: 'Этап 3. Merchant API',
                icon: 'pi pi-fw pi-plus',
                to: { name: 'webkassa-merchant-api' },
                childrens: [
                    {
                        label: 'Этап 3.1. Получения справочной информации по платежу (Info)',
                        icon: 'pi pi-fw pi-plus',
                        to: {
                            name: 'webkassa-merchant-api-info',
                            hash: '#webkassa-merchant-api-info'
                        }
                    },
                    {
                        label: 'Этап 3.2. Получение подтверждения по платежу с последующей оплатой (Pay).',
                        icon: 'pi pi-fw pi-plus',
                        to: {
                            name: 'webkassa-merchant-api-pay',
                            hash: '#webkassa-merchant-api-pay'
                        }
                    },
                    {
                        label: 'Этап 3.3. Уведомление о статусе платежа (Notify).',
                        icon: 'pi pi-fw pi-plus',
                        to: {
                            name: 'webkassa-merchant-api-notify',
                            hash: '#webkassa-merchant-api-notify'
                        }
                    },
                    {
                        label: 'Этап 3.4. Отмена платежа (Cancel).',
                        icon: 'pi pi-fw pi-plus',
                        to: {
                            name: 'webkassa-merchant-api-cancel',
                            hash: '#webkassa-merchant-api-cancel'
                        }
                    },
                    {
                        label: 'Этап 3.5. Отчет о платежах (Statement).',
                        icon: 'pi pi-fw pi-plus',
                        to: {
                            name: 'webkassa-merchant-api-statement',
                            hash: '#webkassa-merchant-api-statement'
                        }
                    },
                    {
                        label: 'Этап 3.6. Узнать статус платежа(необязательный) (Status).',
                        icon: 'pi pi-fw pi-plus',
                        to: {
                            name: 'webkassa-merchant-api-status',
                            hash: '#webkassa-merchant-api-status'
                        }
                    },
                    {
                        label: 'Этап 3.7. Фискальные данные(необязательный) (Fiscalization).',
                        icon: 'pi pi-fw pi-plus',
                        to: {
                            name: 'webkassa-merchant-api-fiscalization',
                            hash: '#webkassa-merchant-api-fiscalization'
                        }
                    }
                ]
            },
            {
                label: 'Этап 4. Тестирование',
                icon: 'pi pi-fw pi-plus',
                to: { name: 'webkassa-auto-test' }
            },
            {
                label: 'Этап 5. Перевод в боевой режим',
                icon: 'pi pi-fw pi-plus',
                to: { name: 'webkassa-goto-prodiction' }
            }
        ]
    }
];
