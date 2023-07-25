<script setup>
const RPCRequestCode = '{"id":202,"method":"method.name","params":{"param1":"Any String"}}';
const RPCResponseCode =
    '{"id" : 202,"error" : null,"result" : {    "param1" : "String or any json type"}}';
const RPCErrorCode =
    '{"id" : 202,"error" : {    "code" : -32601,    "message" : "Запрашиваемый метод не найден."},"result" : null}';
const rpcRequestTable = {
    data: [
        {
            property: 'id',
            type: 'Integer',
            description: 'Идентификатор запроса.'
        },
        {
            property: 'method',
            type: 'String',
            description: 'Имя метода на удаленном сервисе.'
        },
        {
            property: 'params',
            type: 'Object',
            description:
                'Необязательный объект с параметрами метода. Если в данном методе нет параметров, поле можно опустить или присвоить ему значение NULL.'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        description: 'Описание'
    }
};

const rpcResponseTable = {
    data: [
        {
            property: 'error',
            type: 'Error',
            description:
                'Данное поле будет содержать ошибку. Если метод выполнился без ошибок, данное поле будет равно NULL.'
        },
        {
            property: 'result',
            type: 'Object',
            description:
                'Объект с результатом метода. В случае возникновения ошибки данное поле будет равно NULL'
        },
        {
            property: 'id',
            type: 'Integer',
            description:
                'Идентификатор запроса. То же значение, что и в запросе, к которому относится данный ответ.'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        description: 'Описание'
    }
};

const errorTypeTable = {
    data: [
        {
            property: 'code',
            type: 'Integer',
            description: 'Код ошибки'
        },
        {
            property: 'message',
            type: 'String',
            description: 'Сообщение об ошибке'
        },
        {
            property: 'data',
            type: 'Object',
            description:
                'Дополнительное поле с данными об ошибке. Поле может содержать NULL, или необходимые данные в контексте данной ошибки.'
        }
    ],
    columns: {
        property: 'Свойство',
        type: 'Тип',
        description: 'Описание'
    }
};
const errorsListTable = {
    data: [
        { code: -32300, description: 'Не хватает параметров' },
        { code: -32301, description: 'Карта не зарегистрирована' },
        { code: -32302, description: 'Не удалось получить информацию о карты' },
        { code: -32303, description: 'Неверный формат телефона' },
        { code: -32304, description: 'Неверный формат номер карты' },
        { code: -32305, description: 'Неверный формат срок действия карты' },
        { code: -32306, description: 'Не удалось зарегистрировать карту' },
        { code: -32307, description: 'Не удалось сгенерировать токен' },
        { code: -32308, description: 'Неверный код или время жизни кода истекло' },
        { code: -32309, description: 'Недостаточно средств' },
        { code: -32310, description: 'Карта заблокирована или временно не обслуживается' },
        { code: -32311, description: 'Услуга SMS-информирования не включена' },
        { code: -32312, description: 'Статус транзакции проведенный' },
        { code: -32313, description: 'Статус транзакции отмененный' },
        { code: -32314, description: 'Транзакция не найдена' },
        { code: -32315, description: 'Сервис заблокирован!' },
        { code: -32316, description: 'Не удалось получить информацию о поставщике' },
        { code: -32317, description: 'Пользователь или заказ не найден' },
        { code: -32318, description: 'Процессинговый центр недоступен' },
        { code: -32319, description: 'Поставщик заблокирован!' },
        { code: -32320, description: 'Неактуальный запрос, timestamp устарел' },
        {
            code: -32400,
            description: 'Системная (внутренняя ошибка). Появляется при различных сбоях'
        },
        { code: -32504, description: 'Недостаточно привилегий для выполнения метода' },
        { code: -32601, description: 'Запрашиваемый метод не найден' },
        { code: -32600, description: 'Передан неправильный JSON-RPC объект' },
        {
            code: -32700,
            description: 'Ошибка Парсинга JSON. RPC запрос является не валидным JSON объектом'
        }
    ],
    columns: {
        code: 'Код',
        description: 'Описание'
    }
};
</script>
<template>
    <div class="">
        <h2 class="text-2xl font-bold my-4">Концепт API</h2>
        <p class="my-4">
            API построено на основе протокола удаленного вызова процедур JSON-RPC 2.0.
        </p>
        <p class="my-4">API Endpoint — <b>https://agr.uz/gateway</b></p>
        <p class="my-4">
            Авторизация и безопасность — Для обеспечения безопасности используется криптографический
            протокол TLS v1, TLS v1.1 или TLS v1.2. Для авторизации платежного инструмента,
            платежный инструмент должен отправить HTTP заголовок “Auth”.
        </p>
        <h2 class="text-2xl font-bold my-4">Структура заголовка Auth</h2>
        <p class="my-4">HTTP заголовок <PrimeChip>Auth: service_id-hash-timestamp</PrimeChip></p>
        <p class="my-4"><b>hash</b> — sha1(secret_key + timestamp)</p>
        <p class="my-4"><b>timestamp</b> — UTC Время соединения в миллисекундах</p>
        <p class="my-4">
            <b>service_id</b> — Идентификатор платежного инструмента в системе PSP. (Выдается при
            регистрации платежного инструмента)
        </p>
        <p class="my-4">
            <b>secret_key</b> — Ключ платежного инструмента. (Выдается при регистрации платежного
            инструмента)
        </p>
        <p class="my-4">
            <b>Владелец приложения</b> — лицо, в собственности которого находится приложение.
        </p>
        <p class="my-4"><b>Пример заголовка</b></p>
        <p class="my-4">
            <PrimeChip>
                Auth:
                05e3bab097f42yu0a62ced0b-7f420a62c22fbe3bab09ed0b57874898-1399114284039</PrimeChip
            >
        </p>
        <h2 class="text-2xl font-bold my-4">Запрос в формате JSON-RPC</h2>
        <p class="my-4">RPC Запрос это JSON объект со следующими полями:</p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="rpcRequestTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in rpcRequestTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <InlineMessage severity="warn">
            В отличии от оригинального стандарта JSON-RPC, поле "params" содержит только именованные
            параметры.
        </InlineMessage>
        <p class="my-4">Пример RPC запроса</p>
        <CodeBlock
            :highlightjs="true"
            :code="RPCRequestCode"
            lang="json"
            :persistentCopyButton="true"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <h2 class="text-2xl font-bold my-4">Ответ в формате JSON-RPC</h2>
        <p class="my-4">RPC Ответ это JSON объект со следующими полями:</p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="rpcResponseTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in rpcResponseTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4">Пример RPC запроса</p>
        <CodeBlock
            :highlightjs="true"
            :code="RPCResponseCode"
            lang="json"
            :persistentCopyButton="true"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <h2 class="text-2xl font-bold my-4">Ошибки</h2>
        <p class="my-4">RPC Ответ это JSON объект со следующими полями:</p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="errorTypeTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in errorTypeTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <p class="my-4">Пример ответа завершенного ошибкой</p>

        <CodeBlock
            :highlightjs="true"
            :code="RPCErrorCode"
            lang="json"
            :persistentCopyButton="true"
            theme="atom-one-dark"
        >
        </CodeBlock>
        <div class="my-4"></div>
        <InlineMessage severity="warn">
            Далее для краткости во всех примерах Запроса и Ответах будут описаны только поля,
            "params" и "result" соответственно.
        </InlineMessage>
        <p class="my-4"><b>Общие ошибки</b></p>
        <DataTable
            :rowHover="true"
            class="my-4"
            :value="errorsListTable.data"
            tableStyle="min-width: 50rem"
        >
            <Column
                v-for="(value, key, index) in errorsListTable.columns"
                v-bind:key="index"
                :field="key"
                :header="value"
            >
            </Column>
        </DataTable>
        <BlockPagination
            :next="{ label: 'Управление саб мерчантами', name: 'market-pay-subvendor-register' }"
        />
    </div>
</template>
