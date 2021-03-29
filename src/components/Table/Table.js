import React from 'react';

const Tables = () => {
    return (
        <>
            <h2 className="leading-relaxed mx-2">Log Entries</h2>
            <table className="w-full flex flex-row flex-no-wrap sm:bg-white overflow-hidden sm:shadow-lg my-5">
                        <thead className="text-white">
                        <tr className="bg-yellow-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Entry</th>
                        </tr>
                        <tr className="bg-yellow-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Entry</th>
                        </tr>
                        <tr className="bg-yellow-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Entry</th>
                        </tr>
                        <tr className="bg-yellow-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Entry</th>
                        </tr>
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">Lorem Ipsum is
                                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged. It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum
                            </td>
                        </tr>
                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">Michael Jackson</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">m_jackson@mail.com</td>
                        </tr>
                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">Julia</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">julia@mail.com</td>
                        </tr>
                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">Martin Madrazo</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">martin.madrazo@mail.com</td>
                        </tr>
                        </tbody>
                    </table>
        </>

    );
};

export default Tables;