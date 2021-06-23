using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Interface
{
    public interface IRequests
    {

        List<Ser> SelectFilmDuration(List<Ser> film);
        List<Class> SelectNumberSersWithНighRating(List<Ser> film);
        List<Class> SelectFresh(List<Ser> film);
        List<string> SelectHowManyVideo(List<Ser> film);
        List<Class> SelectHowManyTime(List<Ser> film);

        List<Class> SelectShort(List<Ser> film);

    }
}
