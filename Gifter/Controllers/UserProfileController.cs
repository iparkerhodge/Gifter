using Microsoft.AspNetCore.Mvc;
using Gifter.Data;
using Gifter.Repositories;
using Gifter.Models;
using Microsoft.AspNetCore.Authorization;
using System;

namespace Gifter.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly UserProfileRepository _profileRepository;
        public UserProfileController(ApplicationDbContext context)
        {
            _profileRepository = new UserProfileRepository(context);
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_profileRepository.GetAll());
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetByFirebaseUserId(string firebaseUserId)
        {
            var userProfile = _profileRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok(userProfile);
        }

        [HttpGet("user/{id}")]
        public IActionResult Get(int id)
        {
            var post = _profileRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult UserProfile(UserProfile user)
        {
            user.DateCreated = DateTime.Now;
            _profileRepository.Add(user);
            return CreatedAtAction("Get", new { id = user.Id }, user);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _profileRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _profileRepository.Delete(id);
            return NoContent();
        }
    }
}