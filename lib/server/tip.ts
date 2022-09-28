import prisma from '../prisma';

export const getTodayTip = async () => {
    const startOfToday = new Date();
    startOfToday.setUTCHours(0,0,0,0);
    const endOfToday = new Date();
    endOfToday.setUTCHours(23,59,59,999);

    return (
        await prisma.tip.findFirst({
            where: {
                date: {
                    gte: startOfToday,
                    lt: endOfToday
                }
            }
        })
    )
}