using Gymzii.Permissions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Gymzii.Cardios;
    public class CardioAppService :
        CrudAppService<
            Cardio,
            CardioDto,
            Guid,
            PagedAndSortedResultRequestDto,
            CreateUpdateCardioDto>,
        ICardioAppService
    {
        public CardioAppService(IRepository<Cardio, Guid> repository) : base(repository) {
        GetPolicyName = GymziiPermissions.Cardios.Default;
        GetListPolicyName = GymziiPermissions.Cardios.Default;
        CreatePolicyName = GymziiPermissions.Cardios.Create;
        UpdatePolicyName = GymziiPermissions.Cardios.Edit;
        DeletePolicyName = GymziiPermissions.Cardios.Delete;

    }
}
