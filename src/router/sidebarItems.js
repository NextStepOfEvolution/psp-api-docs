export default {
    findTree: function (name) {
        function hasName(name, item) {
            let found = [];
            if (item?.to?.name == name) {
                found.push(item.to.name);
                return found;
            }
            if (item.childrens) {
                for (let index = 0; index < item.childrens.length; index++) {
                    const children = item.childrens[index];
                    const tree = hasName(name, children);
                    if (tree.length > 0) {
                        found.push(item.to.name);
                        found = found.concat(tree);
                        break;
                    }
                }
            }
            return found;
        }
        for (let index = 0; index < this.items.length; index++) {
            const item = this.items[index];
            const tree = hasName(name, item);
            if (tree.length > 0) {
                return tree;
            }
        }
        return [];
    },
    items: [
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
            to: { name: 'webkassa-introduction' },
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
                        // {
                        //     label: 'Этап 3.1. Получения справочной информации по платежу (Info)',
                        //     icon: 'pi pi-fw pi-plus',
                        //     to: {
                        //         name: 'webkassa-merchant-api',
                        //         hash: '#webkassa-merchant-api-info'
                        //     }
                        // },
                        // {
                        //     label: 'Этап 3.2. Получение подтверждения по платежу с последующей оплатой (Pay).',
                        //     icon: 'pi pi-fw pi-plus',
                        //     to: {
                        //         name: 'webkassa-merchant-api',
                        //         hash: '#webkassa-merchant-api-pay'
                        //     }
                        // },
                        // {
                        //     label: 'Этап 3.3. Уведомление о статусе платежа (Notify).',
                        //     icon: 'pi pi-fw pi-plus',
                        //     to: {
                        //         name: 'webkassa-merchant-api',
                        //         hash: '#webkassa-merchant-api-notify'
                        //     }
                        // },
                        // {
                        //     label: 'Этап 3.4. Отмена платежа (Cancel).',
                        //     icon: 'pi pi-fw pi-plus',
                        //     to: {
                        //         name: 'webkassa-merchant-api',
                        //         hash: '#webkassa-merchant-api-cancel'
                        //     }
                        // },
                        // {
                        //     label: 'Этап 3.5. Отчет о платежах (Statement).',
                        //     icon: 'pi pi-fw pi-plus',
                        //     to: {
                        //         name: 'webkassa-merchant-api',
                        //         hash: '#webkassa-merchant-api-statement'
                        //     }
                        // },
                        // {
                        //     label: 'Этап 3.6. Узнать статус платежа(необязательный) (Status).',
                        //     icon: 'pi pi-fw pi-plus',
                        //     to: {
                        //         name: 'webkassa-merchant-api',
                        //         hash: '#webkassa-merchant-api-status'
                        //     }
                        // },
                        // {
                        //     label: 'Этап 3.7. Фискальные данные(необязательный) (Fiscalization).',
                        //     icon: 'pi pi-fw pi-plus',
                        //     to: {
                        //         name: 'webkassa-merchant-api',
                        //         hash: '#webkassa-merchant-api-fiscalization'
                        //     }
                        // }
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
                },
                {
                    label: 'Дополнительные возможности',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'webkassa-additional-features' }
                },
                {
                    label: 'Ошибки',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'webkassa-errors' }
                }
            ]
        },
        {
            label: 'Web-терминал',
            icon: 'pi pi-fw pi-plus',
            to: { name: 'web-terminal-introduce' },
            childrens: [
                {
                    label: 'Общие сведения',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'web-terminal-introduce' }
                },
                {
                    label: 'Этап 1. Подготовка к интеграции',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'web-terminal-preparation' }
                },
                {
                    label: 'Этап 2. Открытие платежного Web-терминала',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'web-terminal-opening' }
                },
                {
                    label: 'Дополнительные возможности',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'web-terminal-additional-features' }
                }
            ]
        },
        {
            label: 'Market Pay',
            icon: 'pi pi-fw pi-plus',
            to: { name: 'market-pay-concept' },
            childrens: [
                {
                    label: 'Конценп API',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'market-pay-concept' }
                },
                {
                    label: 'Управление саб мерчантами',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'market-pay-subvendor-register' },
                    childrens: [
                        {
                            label: 'Создание саб мерчанта',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-subvendor-register' }
                        },
                        {
                            label: 'Редактирование саб мерчанта',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-subvendor-update' }
                        },
                        {
                            label: 'Подтверждение саб мерчанта',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-subvendor-confirm' }
                        },
                        {
                            label: 'Получение списка саб мерчантов',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-subvendor-list' }
                        }
                    ]
                },
                {
                    label: 'Сохранение карты',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'market-pay-card-registration' },
                    childrens: [
                        {
                            label: 'Запрос на регистрацию карты',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-card-registration' }
                        },
                        {
                            label: 'Подтверждение карты',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-card-confirmation' }
                        }
                    ]
                },
                {
                    label: 'Проведение оплаты',
                    icon: 'pi pi-fw pi-plus',
                    to: { name: 'market-pay-proccess-prepare' },
                    childrens: [
                        {
                            label: 'Подготовка транзакции оплаты',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-proccess-prepare' }
                        },
                        {
                            label: 'Подтверждение подготовленной транзакции оплаты',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-proccess-confirm' }
                        },
                        {
                            label: 'Оплата с сохраненной картой',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-proccess-pay' }
                        },
                        {
                            label: 'Подтверждение захолдированной транзакции',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-proccess-confirm-transfer' }
                        },
                        {
                            label: 'Отмена захолдированной транзакции',
                            icon: 'pi pi-fw pi-plus',
                            to: { name: 'market-pay-proccess-reverse' }
                        }
                    ]
                }
            ]
        }
    ]
};
