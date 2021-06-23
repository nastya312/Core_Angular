using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Interface
{
    public class Requests : IRequests
    {
        public List<Ser> SelectFilmDuration(List<Ser> film)
        {
            var selected = film.Where(film => film.Video.Any(i => i.Duration < 40))
                .ToList();
            return selected;
        }


        public List<Class> SelectNumberSersWithНighRating(List<Ser> film)
        {
            List<Class> data = new List<Class>();
            var selected = film.Where(film => film.Rating > 6).ToList();
            foreach (var i in selected)
            {
                Class var = new Class();

                var.id = i.Id;
                var.name = i.Name;
                var.summary = $"{i.Video.Select(x => x.Series).DefaultIfEmpty().Max()}";
                data.Add(var);
            }
            return data;
        }

        public List<Class> SelectFresh(List<Ser> film)
        {
            List<Class> data = new List<Class>();
            var selected = film.Where(film => film.Fresh() == true).ToList();
            foreach (var i in selected)
            {
                Class var = new Class();
                var.id = i.Id;
                var.name = i.Name;
                var.summary = $"{i.Genre}";

                data.Add(var);
            }
            return data;
        }
        
        public List<string> SelectHowManyVideo(List<Ser> film)
        {
            List<string> result = new List<string>();
            foreach (var i in film)
            {
                var numb_ser = i.Video.Select(x => x.Series).Max();
                var name = i.Name;
                for (int j = 1; j <= numb_ser; j++)
                {
                    var video = i.Video.Where(x => x.Series == j);
                    var numb_video = video.Count();
                    var time = video.Sum(x => x.Duration)/60;
                    result.Add($"Название сериала: {name} - Сезон: {j}- Количество серий: {numb_video} - Время просмотра сезона: {string.Format("{0:N2}",time)}");
                }
            }
            return result;
        }

        public List<Class> SelectHowManyTime(List<Ser> film)
        {
            List<Class> data = new List<Class>();
        
            foreach (var i in film)
            {
                Class var = new Class();
                var.id = i.Id;
                var.name = i.Name;
                var time = i.Video.Sum(x => x.Duration) / 60;
                var.summary = $"{Math.Round(time)}";

                data.Add(var);
                
            }
            return data;
        }

        public List<Class> SelectShort(List<Ser> film)
        {
            List<Class> data = new List<Class>();

            foreach (var i in film)
            {
                var video = i.Video.Where(x => x.Duration <= 40).Select(z => z.Name);
                if (video.Count() != 0)
                {

                    Class var = new Class();
                    var.id = i.Id;
                    var.name = i.Name;
                 
                    var.summary = $"{String.Join(", ", video)}";

                    data.Add(var);
                }
            }
            return data;
        }
    }
}
