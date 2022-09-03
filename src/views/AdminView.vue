<template>
  <div>
 

<!-- Dashboard -->
<div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
  <!-- Vertical Navbar -->
  <nav class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
      <div class="container-fluid">
          <!-- Toggler -->
          <button class="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Brand -->
          <a class="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
              <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="...">
          </a>
          <!-- User menu (mobile) -->
          <div class="navbar-user d-lg-none">
              <!-- Dropdown -->
              <div class="dropdown">
                  <!-- Toggle -->
                  <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <div class="avatar-parent-child">
                          <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar- rounded-circle">
                          <span class="avatar-child avatar-badge bg-success"></span>
                      </div>
                  </a>
                  <!-- Menu -->
                  <div class="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                      <a href="#" class="dropdown-item">Profile</a>
                      <a href="#" class="dropdown-item">Settings</a>
                      <a href="#" class="dropdown-item">Billing</a>
                      <hr class="dropdown-divider">
                      <a href="#" class="dropdown-item">Logout</a>
                  </div>
              </div>
          </div>
          <!-- Collapse -->
          <div class="collapse navbar-collapse" id="sidebarCollapse">
              <!-- Navigation -->
              <ul class="navbar-nav">
                
                  <li class="nav-item">
                      <a class="nav-link" href="#">
                          <i class="bi bi-house"></i> Dashboard
                      </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="bi bi-people"></i> Patient
                    </a>
                </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">
                          <i class="bi bi-bar-chart"></i> Professionnel de sante
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">
                          <i class="bi bi-chat"></i> <main>Maladie</main>
                          
                      </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#">
                          <i class="bi bi-bookmarks"></i> Vaccin
                      </a>
                  </li>
                 
              </ul>
              <!-- Divider -->
              <hr class="navbar-divider my-5 opacity-20">
              <!-- Navigation -->
             
              <!-- Push content down -->
              <div class="mt-auto"></div>
              <!-- User (md) -->
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" href="#">
                          <i class="bi bi-person-square"></i> Account
                      </a>
                  </li>
                 
              </ul>
          </div>
      </div>
  </nav>
  <!-- Main content -->
  <div class="h-screen flex-grow-1 overflow-y-lg-auto">
      <!-- Header -->
      <header class="bg-surface-primary border-bottom pt-6">
          <div class="container-fluid">
              <div class="mb-npx">
                  <div class="row align-items-center">
                      <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                          <!-- Title -->
                          <h1 class="h2 mb-0 ls-tight">Application</h1>
                         
                      </div>
                      <!-- Actions -->
                     
                  </div>
                  <!-- Nav -->
                 
              </div>
          </div>
      </header>
      <!-- Main -->
      <main class="py-6 bg-surface-secondary surfac">
          <div class="text-center pb-4">
              <button @click="redirect" class="btn btn-primary">Ajouter professionnel</button>
          </div>
            
                <div class="container-fluid">
              <!-- Card stats -->
            
              <div class="card shadow border-0 mb-7 d-none">
                  <div class="card-header">
                      <h5 class="mb-0">Applications</h5>
                  </div>
                  <div class="table-responsive">
                      <table class="table table-hover table-nowrap">
                          <thead class="thead-light">
                              <tr>
                                  <th scope="col">Nom</th>
                                  <th scope="col">Prenom</th>
                                  <th scope="col">Numero</th>
                                  <th scope="col">Adresse Email</th>
                                  <th scope="col">Actions</th>
                              </tr>
                          </thead>
                          <tbody>

                
                             <tr>
                                  <td>
                                      <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                      <a class="text-heading font-semibold" href="#">
                                         
                                      </a>
                                  </td>
                                  <td>
                                      
                                  </td>
                                
                                  <td>
                                   
                                  </td>
                                  <td>
                                     
                                  </td>
                                  <td class="text-end">
                                      <a href="/detail/<%= patient.id %>" class="btn btn-sm btn-neutral">View</a>
                                      <a href="/update/<%= patient.id %>" class="btn btn-sm btn-neutral  bg-danger text-white" data-bs-toggle="modal" data-bs-target="#modal_example"><i class="bi bi-trash"></i></a>
                                      <a href="/edit/<%= patient.id %>" class="btn btn-sm btn-neutral bg-primary text-white"> <i class="bi bi-pen"></i></a>
                                     
                                  </td>
                              </tr>

                       

                            
                          </tbody>
                      </table>
                  </div>
                  <div class="card-footer border-0 py-5">
                      <span class="text-muted text-sm">Showing 10 items out of 250 results found</span>
                  </div>
              </div>
          </div>
               
      
                <div class="container-fluid">
              <!-- Card stats -->
            
              <div class="card shadow border-0 mb-7 ">
                  <div class="card-header">
                      <h5 class="mb-0">Applications</h5>
                  </div>
                  <div class="table-responsive">
                      <table class="table table-hover table-nowrap">
                          <thead class="thead-light">
                              <tr>
                                  <th scope="col">Nom</th>
                                  <th scope="col">Prenom</th>
                                  <th scope="col">Numero</th>
                                  <th scope="col">Adresse Email</th>
                                  <th scope="col">Actions</th>
                              </tr>
                          </thead>
                          <tbody>

                
                             <tr>
                                  <td>
                                      <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" class="avatar avatar-sm rounded-circle me-2">
                                      <a class="text-heading font-semibold" href="#">
                                         
                                      </a>
                                  </td>
                                  <td>
                                    
                                  </td>
                                
                                  <td>
                                    
                                  </td>
                                  <td>
                                 
                                  </td>
                                  <td class="text-end">
                                      <a href="/doctor/infodoctor/<%= doctor.id %>" class="btn btn-sm btn-neutral">View</a>
                                      <a href="/detaildoctor/<%= doctor.id %>" class="btn btn-sm btn-neutral  bg-danger text-white" data-bs-toggle="modal" data-bs-target="#modal_example"><i class="bi bi-trash"></i></a>
                                      <a href="/doctor/detaildoctor/<%= doctor.id %>" class="btn btn-sm btn-neutral bg-primary text-white"> <i class="bi bi-pen"></i></a>
                                     
                                  </td>
                              </tr>

                        
                         

                            
                          </tbody>
                      </table>
                  </div>
                  <div class="card-footer border-0 py-5">
                    
                  </div>
              </div>
          </div>
               
      



          

         
      </main>
  </div>
</div>




<div class="modal" id="modal_example" tabindex="-1" aria-labelledby="modal_example" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content shadow-3">
        <div class="modal-header">
          
          <div class="text-xs ms-auto">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body">
          
            <p>Etre vous sure de voulois supprimer votre compte.</p>
         
        </div>
      
        <div class="modal-footer">
            <button type="button"  class="btn btn-sm btn-neutral bg-success text-white" onclick="non()">Non</button>
            <button type="button" onclick="supp('<%= patient.id %>')" class="btn btn-sm btn-neutral bg-danger text-white" >Oui</button>
        
        </div>
      
      </div>
    </div>
  </div>
  </div>
</template>

<script>

export default {
    methods:{
        redirect(){
            this.$router.push('/admindoctor')
        }
    }

}
</script>

<style scoped lang="css">

@import url(https://unpkg.com/@webpixels/css@1.1.5/dist/index.css);

/* Bootstrap Icons */
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.4.0/font/bootstrap-icons.min.css");

</style>