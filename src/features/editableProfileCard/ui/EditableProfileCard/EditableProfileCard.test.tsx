import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 21,
    currency: Currency.EUR,
    country: Country.Russia,
    city: 'Moscow',
    username: 'mrandrushik',
    avatar: 'https://dgbijzg00pxv8.cloudfront.net/10148489-ca80-4911-b76a-878da46e1eba/000000-0000000002/15377113736242044468441686163017542525599537000685968960702751402001230352437/ITEM_PREVIEW1.jpeg',
};

const user = userEvent.setup();

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'mrandrushik',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer,
    },
};

describe('button', () => {
    test('Меняются кнопик при нажатии редактировать', async () => {
        componentRender(<EditableProfileCard id='1' />, options);
        await user.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn')
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn')
        ).toBeInTheDocument();
    });

    test('При отмене значения изменени data и form равны', async () => {
        componentRender(<EditableProfileCard id='1' />, options);
        await user.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn')
        );
        await user.clear(screen.getByTestId('ProfileCard.First'));
        await user.clear(screen.getByTestId('ProfileCard.Second'));

        await user.type(screen.getByTestId('ProfileCard.First'), 'user');
        await user.type(screen.getByTestId('ProfileCard.Second'), 'user');

        expect(screen.getByTestId('ProfileCard.First')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.Second')).toHaveValue('user');

        await user.click(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn')
        );

        expect(screen.getByTestId('ProfileCard.First')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.Second')).toHaveValue('admin');
    });

    test('Должна появиться ошибка', async () => {
        componentRender(<EditableProfileCard id='1' />, options);
        await user.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn')
        );
        await user.clear(screen.getByTestId('ProfileCard.First'));

        await user.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn')
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph')
        ).toBeInTheDocument();
    });

    test('Нет ошибок => улетает запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id='1' />, options);
        await user.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn')
        );

        await user.type(screen.getByTestId('ProfileCard.First'), 'user');

        await user.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn')
        );
        expect(mockPutReq).toBeCalled();
    });
});
