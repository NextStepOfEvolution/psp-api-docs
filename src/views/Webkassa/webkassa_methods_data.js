export default {
    info: {
        request: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'MERCHANT_TRANS_ID',
                    format: 'string (256)',
                    description:
                        'ID заказа (для Интернет-магазинов)/лицевого счета/логина в биллинге Мерчанта',
                    example: 'SDJ4957'
                },
                {
                    param: 'SIGN_TIME',
                    format: 'integer',
                    description: 'Текущее время в миллисекундах',
                    example: '1480056082732'
                },
                {
                    param: 'SIGN_STRING',
                    format: 'string (md5)',
                    description:
                        'Проверочная строка, подтверждающая подлинность отправляемого запроса. ХЭШ MD5 из следующих параметров: md5( SECRET_KEY . MERCHANT_TRANS_ID . SIGN_TIME ) SECRET_KEY – уникальная строка, выдаваемая Мерчанту при подключении.',
                    example: '2e483be74e568b4d7d4a7d9421f404fc'
                }
            ]
        },
        response: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'ERROR',
                    format: 'int',
                    description:
                        'Код статуса. 0 – успешно. В случае ошибки возвращается код ошибки.',
                    example: '0'
                },
                {
                    param: 'ERROR_NOTE',
                    format: 'string',
                    description: 'Описание кода.',
                    example: 'Success'
                },
                {
                    param: 'PARAMETERS',
                    format: 'string (json)',
                    description: 'Любая справочная информация',
                    example: '{"full_name":"Full Name","email":"email@mail.uz"}'
                }
            ]
        }
    },
    pay: {
        request: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'VENDOR_ID',
                    format: 'integer',
                    description: 'ID Мерчанта в системе PSP',
                    example: 158587744
                },
                {
                    param: 'PAYMENT_ID',
                    format: 'integer',
                    description: 'ID платежной системы в системе PSP',
                    example: 9
                },
                {
                    param: 'PAYMENT_NAME',
                    format: 'string',
                    description: 'Название платежной системы в системе PSP',
                    example: 'uzcard'
                },
                {
                    param: 'AGR_TRANS_ID',
                    format: 'integer',
                    description: 'ID платежа в системе PSP',
                    example: '83749583512'
                },
                {
                    param: 'MERCHANT_TRANS_ID',
                    format: 'string',
                    description:
                        'ID заказа (для Интернет-магазинов)/лицевого счета/логина в биллинге Мерчанта',
                    example: 'SDJ4957'
                },
                {
                    param: 'MERCHANT_TRANS_AMOUNT',
                    format: 'integer',
                    description: 'Сумма оплаты в сумах',
                    example: 2000
                },
                {
                    param: 'ENVIRONMENT',
                    format: 'string',
                    description: '"live" или "sandbox"',
                    example: 'live'
                },
                {
                    param: 'MERCHANT_TRANS_DATA',
                    format: 'string',
                    description:
                        'Детали платежа для Мерчанта. Возвращается Мерчанту если параметр передовался в начале: base64_encode($json_data);',
                    example: 'eyJwYXJhbV9rZXlftX3ZhbHVlXzIifQ=='
                },
                {
                    param: 'SIGN_TIME',
                    format: 'integer',
                    description: 'Текущее время в миллисекундах',
                    example: '1480056082732'
                },
                {
                    param: 'SIGN_STRING',
                    format: 'string',
                    description:
                        'Проверочная строка, подтверждающая подлинность отправляемого запроса. ХЭШ MD5 из следующих параметров:md5( SECRET_KEY . AGR_TRANS_ID . VENDOR_ID . PAYMENT_ID . PAYMENT_NAME . MERCHANT_TRANS_ID . MERCHANT_TRANS_AMOUNT . ENVIRONMENT . SIGN_TIME )SECRET_KEY – уникальная строка, выдаваемая Мерчанту при подключении.',
                    example: '2e483be74e568b4d7d4a7d9421f404fc'
                }
            ]
        },
        response: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'ERROR',
                    format: 'integer',
                    description:
                        'Код статуса. 0 – успешно. В случае ошибки возвращается код ошибки.',
                    example: 0
                },
                {
                    param: 'ERROR_NOTE',
                    format: 'string',
                    description: 'Описание кода.',
                    example: 'Success'
                },
                {
                    param: 'VENDOR_TRANS_ID',
                    format: 'integer',
                    description: 'ID платежа в биллинг системе Мерчанта.',
                    example: '456892353'
                }
            ]
        }
    },
    notify: {
        request: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'AGR_TRANS_ID',
                    format: 'integer',
                    description: 'ID платежа в системе PSP',
                    example: 158587744
                },
                {
                    param: 'VENDOR_TRANS_ID',
                    format: 'integer',
                    description: 'ID платежа в биллинг системе Мерчанта.',
                    example: 99987262
                },
                {
                    param: 'STATUS',
                    format: 'integer',
                    description: 'Статус платежа:“2” – оплачено;“3” – отменено;',
                    example: 2
                },
                {
                    param: 'SIGN_TIME',
                    format: 'integer',
                    description: 'Текущее время в миллисекундах',
                    example: 1480056082732
                },
                {
                    param: 'SIGN_STRING',
                    format: 'string',
                    description:
                        'Проверочная строка, подтверждающая подлинность отправляемого запроса. ХЭШ MD5 из следующих параметров:md5( SECRET_KEY . AGR_TRANS_ID . VENDOR_TRANS_ID . STATUS . SIGN_TIME )SECRET_KEY – уникальная строка, выдаваемая Мерчанту при подключении.',
                    example: '2e483be74e568b4d7d4a7d9421f404fc'
                }
            ]
        },
        response: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'ERROR',
                    format: 'integer',
                    description:
                        'Код статуса. 0 – успешно. В случае ошибки возвращается код ошибки.',
                    example: 0
                },
                {
                    param: 'ERROR_NOTE',
                    format: 'string',
                    description: 'Описание кода.',
                    example: 'Success'
                }
            ]
        }
    },
    cancel: {
        request: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'AGR_TRANS_ID',
                    format: 'integer',
                    description: 'ID платежа в системе PSP',
                    example: 1503639319870
                },
                {
                    param: 'VENDOR_TRANS_ID',
                    format: 'integer',
                    description: 'ID платежа в биллинг системе Мерчанта.',
                    example: 99987262
                },
                {
                    param: 'SIGN_TIME',
                    format: 'integer',
                    description: 'Текущее время в миллисекундах',
                    example: 1480056082732
                },
                {
                    param: 'SIGN_STRING',
                    format: 'string',
                    description:
                        'Проверочная строка, подтверждающая подлинность отправляемого запроса. ХЭШ MD5 из следующих параметров: md5( SECRET_KEY . AGR_TRANS_ID . VENDOR_TRANS_ID . SIGN_TIME ) SECRET_KEY – уникальная строка, выдаваемая Мерчанту при подключении.',
                    example: '2e483be74e568b4d7d4a7d9421f404fc'
                }
            ]
        },
        response: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'ERROR',
                    format: 'integer',
                    description:
                        'Код статуса. 0 – успешно. В случае ошибки возвращается код ошибки.',
                    example: 0
                },
                {
                    param: 'ERROR_NOTE',
                    format: 'string',
                    description: 'Описание кода.',
                    example: 'Success'
                }
            ]
        }
    },
    statement: {
        request: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'FROM',
                    format: 'integer',
                    description: 'Дата от',
                    example: 1503639319870
                },
                {
                    param: 'TO',
                    format: 'integer',
                    description: 'Дата до',
                    example: 99987262
                },
                {
                    param: 'SIGN_TIME',
                    format: 'integer',
                    description: 'Текущее время в миллисекундах',
                    example: 1480056082732
                },
                {
                    param: 'SIGN_STRING',
                    format: 'string',
                    description:
                        'Проверочная строка, подтверждающая подлинность отправляемого запроса. ХЭШ MD5 из следующих параметров: md5( SECRET_KEY . FROM . TO . SIGN_TIME ) SECRET_KEY – уникальная строка, выдаваемая Мерчанту при подключении.',
                    example: '2e483be74e568b4d7d4a7d9421f404fc'
                }
            ]
        },
        response: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'ERROR',
                    format: 'integer',
                    description:
                        'Код статуса. 0 – успешно. В случае ошибки возвращается код ошибки.',
                    example: 0
                },
                {
                    param: 'ERROR_NOTE',
                    format: 'string',
                    description: 'Описание кода.',
                    example: 'Success'
                },
                {
                    param: 'TRANSACTIONS',
                    format: 'string (json)',
                    description: 'Массив платежей',
                    example:
                        '[{ "ENVIRONMENT":"live", "AGR_TRANS_ID":"345264652", "VENDOR_TRANS_ID":"67879769", "MERCHANT_TRANS_ID":"7", "MERCHANT_TRANS_AMOUNT":"1000", "STATE":"2", "DATE":"1480056082732" }]'
                }
            ]
        }
    },
    status: {
        request: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'VENDOR_ID',
                    format: 'integer',
                    description: 'ID Мерчанта в системе PSP',
                    example: 1503639319870
                },
                {
                    param: 'AGR_TRANS_ID',
                    format: 'integer',
                    description: 'ID платежа в биллинг системе PSP.',
                    example: 99987262
                },
                {
                    param: 'PAYMENT_ID',
                    format: 'integer',
                    description: 'ID платежной системы в системе PSP',
                    example: 99987262
                },
                {
                    param: 'SIGN_TIME',
                    format: 'integer',
                    description: 'Текущее время в миллисекундах',
                    example: 1480056082732
                },
                {
                    param: 'SIGN_STRING',
                    format: 'string',
                    description:
                        'Проверочная строка, подтверждающая подлинность отправляемого запроса. ХЭШ MD5 из следующих параметров: md5( SECRET_KEY . AGR_TRANS_ID . VENDOR_ID . PAYMENT_ID . SIGN_TIME ) SECRET_KEY – уникальная строка, выдаваемая Мерчанту при подключении.',
                    example: '2e483be74e568b4d7d4a7d9421f404fc'
                }
            ]
        },
        response: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'ERROR',
                    format: 'integer',
                    description:
                        'Код статуса. 0 – успешно. В случае ошибки возвращается код ошибки.',
                    example: 0
                },
                {
                    param: 'ERROR_NOTE',
                    format: 'string',
                    description: 'Описание кода.',
                    example: 'Success'
                }
            ]
        }
    },
    fiscalization: {
        request: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'AGR_TRANS_ID',
                    format: 'integer',
                    description: 'ID платежа в системе PSP',
                    example: 123245697
                },
                {
                    param: 'TYPE',
                    format: 'string',
                    description: 'PAYMENT или CANCEL',
                    example: 123245697
                },
                {
                    param: 'SIGN_TIME',
                    format: 'integer',
                    description: 'Текущее время в миллисекундах',
                    example: 1480056082732
                },
                {
                    param: 'SIGN_STRING',
                    format: 'string',
                    description:
                        'Проверочная строка, подтверждающая подлинность отправляемого запроса. ХЭШ MD5 из следующих параметров: md5( SECRET_KEY . AGR_TRANS_ID . TYPE . SIGN_TIME ) SECRET_KEY – уникальная строка, выдаваемая Мерчанту при подключении.',
                    example: '2e483be74e568b4d7d4a7d9421f404fc'
                }
            ]
        },
        response: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'ERROR',
                    format: 'integer',
                    description:
                        'Код статуса. 0 – успешно. В случае ошибки возвращается код ошибки.',
                    example: 0
                },
                {
                    param: 'ERROR_NOTE',
                    format: 'string',
                    description: 'Описание кода.',
                    example: 'Success'
                },
                {
                    param: 'PARAMETERS',
                    format: 'string (json)',
                    description: 'JSON объект',
                    example:
                        '{ "type": 0, "phone_number": "998901234567", "items":[{ "discount": 500.5, "title": "Test Item", "price": 1500.0, "count": 1, "code": "00012245689654", "units": 122223, "vat_percent": 15, "package_code": 123456 }] }'
                }
            ]
        },
        parameters: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'type',
                    format: 'integer',
                    description: 'Тип платежа. 0 - покупка 1 - аванс 2 - кредит',
                    example: 0
                },
                {
                    param: 'phone_number',
                    format: 'string',
                    description: '(Не обязательный) Номер телефона пользователя.',
                    example: 998901234567
                },
                {
                    param: 'items',
                    format: 'string (json)',
                    description: 'JSON массив',
                    example:
                        '[{ "discount": 500.5, "title": "Test Item", "price": 1500.0, "count": 1, "code": "00012245689654", "units": 122223, "vat_percent": 15, "package_code": 123456 }]'
                }
            ]
        },
        item: {
            columns: {
                param: 'Параметр',
                format: 'Формат',
                description: 'Описание',
                example: 'Пример'
            },
            data: [
                {
                    param: 'discount',
                    format: 'float',
                    description:
                        '(Не обязательный)Общая сумма скидки за набор count. Не может быть больше или равным параметру price	',
                    example: 100.5
                },
                {
                    param: 'title',
                    format: 'string',
                    description: 'Наименование товара либо услуги',
                    example: 998901234567
                },
                {
                    param: 'price',
                    format: 'float',
                    description: 'Общая сумма позиции с учетом кличества и без учета скидок',
                    example: '1100.5'
                },
                {
                    param: 'count',
                    format: 'integer',
                    description: 'Количество',
                    example: '1'
                },
                {
                    param: 'code',
                    format: 'string',
                    description: 'Код ИКПУ',
                    example: '10306002001000000'
                },
                {
                    param: 'units',
                    format: 'integer',
                    description: '(Не обязательный)Код единицы измерения',
                    example: 1000
                },
                {
                    param: 'vat_percent',
                    format: 'integer',
                    description: '(Не обязательный)Процент НДС',
                    example: 15
                },
                {
                    param: 'package_code',
                    format: 'string',
                    description: '(Не обязательный)Код упаковки',
                    example: '12345678912345678540'
                }
            ]
        }
    }
};
