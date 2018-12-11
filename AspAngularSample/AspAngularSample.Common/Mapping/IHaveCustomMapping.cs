namespace AspAngularSample.Common.Mapping
{
    using AutoMapper;

    /// <summary>
    /// custom configuration - describes the binding configurations for the specific properties
    /// </summary>
    public interface IHaveCustomMapping
    {
        void ConfigureMapping(Profile mapper);
    }
}
